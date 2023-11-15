import React, { useState, useEffect } from 'react';
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';
import './hashing.css';

export default function HashingForm() {
  const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
  const [text_input, setTextInput] = useState('');
  const [file_input, setFileInput] = useState('');
  const [algorithm, setAlgorithm] = useState('sha1');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const hashInput = async () => {
      let result = '';

      // Check if both text and file inputs are empty
      if (!text_input && !file_input) {
        result = ''; // Set the output to an empty string
      } else {
        // Check if we have a text input
        if (text_input) {
          // Hash the text based on the selected algorithm
          if (algorithm === 'sha1') {
            result = await sha1(text_input);
          } else if (algorithm === 'sha256') {
            result = await sha256(text_input);
          } else if (algorithm === 'sha384') {
            result = await sha384(text_input);
          } else if (algorithm === 'sha512') {
            result = await sha512(text_input);
          }
        }

        // Check if we have a file input
        if (file_input) {
          // Hash the file content based on the selected algorithm
          if (algorithm === 'sha1') {
            result = await sha1(file_input);
          } else if (algorithm === 'sha256') {
            result = await sha256(file_input);
          } else if (algorithm === 'sha384') {
            result = await sha384(file_input);
          } else if (algorithm === 'sha512') {
            result = await sha512(file_input);
          }
        }
      }

      // Set the hashed text
      setOutput(result || ''); // Set to an empty string if result is falsy
    };

    hashInput();
  }, [text_input, file_input, algorithm]);

  const handleTextInput = async (e) => {
    let value = e.target.value;

    let result = '';

    if (algorithm === 'sha1') {
      result = await sha1(value);
    } else if (algorithm === 'sha256') {
      result = await sha256(value);
    } else if (algorithm === 'sha384') {
      result = await sha384(value);
    } else if (algorithm === 'sha512') {
      result = await sha512(value);
    }

    setOutput(result || '');
    setTextInput(value);
  };

  const handleFileInput = (e) => {
    const fr = new FileReader();

    fr.onload = async () => {
      let result = '';

      if (algorithm === 'sha1') {
        result = await sha1(fr.result);
      } else if (algorithm === 'sha256') {
        result = await sha256(fr.result);
      } else if (algorithm === 'sha384') {
        result = await sha384(fr.result);
      } else if (algorithm === 'sha512') {
        result = await sha512(fr.result);
      }

      setOutput(result);
      setFileInput(fr.result);
    };

    fr.readAsText(e.target.files[0]);
  };

  const handleAlgorithmChange = async (e) => {
    let value = e.target.value;

    let result = '';

    if (!text_input && !file_input) {
      result = '';
    } else {
      if (text_input) {
        if (value === 'sha1') {
          result = await sha1(text_input);
        } else if (value === 'sha256') {
          result = await sha256(text_input);
        } else if (value === 'sha384') {
          result = await sha384(text_input);
        } else if (value === 'sha512') {
          result = await sha512(text_input);
        }
      }

      if (file_input) {
        if (value === 'sha1') {
          result = await sha1(file_input);
        } else if (value === 'sha256') {
          result = await sha256(file_input);
        } else if (value === 'sha384') {
          result = await sha384(file_input);
        } else if (value === 'sha512') {
          result = await sha512(file_input);
        }
      }
    }

    setAlgorithm(value);
    setOutput(result || '');
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
                  value={text_input}
                  onChange={handleTextInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input">File Input</label>
                <input type="file" className="form-control y-5" id="file-input" onChange={handleFileInput} />
              </div>
            </form>
          </div>

          <div className="hashing-algorithms">
            <h4 className="hashing-algorithms-heading text-gradient">Algorithms</h4>
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
            <h4 className="hashed-algorithm-heading text-gradient">Output</h4>
            <div className="hashed-algorithm-container">
              <p className="hashed-algorithm-text ">{output}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
