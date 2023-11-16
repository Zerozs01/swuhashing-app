import React, { useState, useEffect, useRef } from 'react';
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';
import './hashing.css';

export default function HashingForm() {
  const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
  const [textInput, setTextInput] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [defaultFileInput, setDefaultFileInput] = useState('');
  const [algorithm, setAlgorithm] = useState('sha1');
  const [output, setOutput] = useState('');

  const fileInputRef = useRef(null); // Ref for file input

  useEffect(() => {
    const hashInput = async () => {
      let result = '';

      if (!textInput && !fileInput) {
        result = '';
      } else {
        if (textInput) {
          result = await hashText(textInput, algorithm);
        }

        if (fileInput) {
          result = await hashFileContent(fileInput, algorithm);
        }
      }

      setOutput(result || '');
    };

    hashInput();
  }, [textInput, fileInput, algorithm]);

  const handleTextInput = async (e) => {
    const value = e.target.value;
    const result = await hashText(value, algorithm);

    setOutput(result || '');
    setTextInput(value);
    setFileInput('');
    setDefaultFileInput(''); // Clear defaultFileInput when new text is entered

    // Check if there's a file input value, and clear it
    if (fileInputRef.current && fileInputRef.current.value) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileInput = (e) => {
    const fr = new FileReader();

    fr.onload = async () => {
      const result = await hashFileContent(fr.result, algorithm);
      setOutput(result);
      setFileInput(fr.result);
      setDefaultFileInput(''); // Clear defaultFileInput when a new file is selected
      setTextInput('');
    };

    fr.readAsText(e.target.files[0]);
  };

  const handleAlgorithmChange = async (e) => {
    const value = e.target.value;
    let result = '';

    if (!textInput && !fileInput) {
      result = '';
    } else {
      if (textInput) {
        result = await hashText(textInput, value);
      }

      if (fileInput) {
        result = await hashFileContent(fileInput, value);
      }
    }

    setAlgorithm(value);
    setOutput(result || '');
  };

  const clearFileInput = () => {
    // Clear file input by setting its value to an empty string
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setFileInput('');
    setOutput('');
    setDefaultFileInput('');
    setTextInput('');
  };

  const hashText = async (text, algo) => {
    switch (algo) {
      case 'sha1':
        return await sha1(text);
      case 'sha256':
        return await sha256(text);
      case 'sha384':
        return await sha384(text);
      case 'sha512':
        return await sha512(text);
      default:
        return '';
    }
  };

  const hashFileContent = async (content, algo) => {
    switch (algo) {
      case 'sha1':
        return await sha1(content);
      case 'sha256':
        return await sha256(content);
      case 'sha384':
        return await sha384(content);
      case 'sha512':
        return await sha512(content);
      default:
        return '';
    }
  };

  return (
    <section className="x-5 ">
      <div className="hashing-container text-light px-1 mb-1 ">
        <div className="hashing-content">
          <div className="text-center py-6">
            <h1 className="display-1 fw-bolder mb-1 y-5">
              <span className="text-gradient d-inline bg-light">Generate</span>
            </h1>
          </div>

          <div className="hashing-form">
            <form>
              <div className="form-group">
                <label htmlFor="text-input">Input</label>
                <input
                  type="text"
                  className="form-control y-5"
                  id="text-input"
                  placeholder="Write some text"
                  value={textInput}
                  onChange={handleTextInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input">File Input</label>
                <input
                  type="file"
                  className="form-control y-5"
                  id="file-input"
                  onChange={handleFileInput}
                  defaultValue={defaultFileInput}
                  ref={fileInputRef}
                />
                <button type="button" className="btn-gradient text-light y-5" onClick={clearFileInput}>
                  Clear File
                </button>
              </div>
            </form>
          </div>

          <div className="hashing-algorithms">
            <h4 className="hashing-algorithms-heading text-gradient">Algorithms<i className="bi bi-gear "></i></h4>
            <div className="hashing-algorithms-list">
              {algorithms.map((algo) => (
                <div className="form-check y-5" key={algo}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="algorithm"
                    id={algo}
                    value={algo}
                    checked={algorithm === algo}
                    onChange={handleAlgorithmChange}
                  />
                  <label className="form-check-label" htmlFor={algo}>
                    {algo}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="hashed-output ">
            <h4 className="hashed-algorithm-heading  text-light">Output</h4>
            <div className="hashed-algorithm-container">
              <p className="hashed-algorithm-text ">{output}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
