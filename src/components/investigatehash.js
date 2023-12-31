import React, { useState, useRef, useEffect } from 'react';
import { sha1, sha256, sha384, sha512 } from 'crypto-hash';
import './hashing.css';

export default function HashingForm() {
  const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
  const [textInput, setTextInput] = useState('');
  const [fileInput, setFileInput] = useState('');
  const [defaultFileInput, setDefaultFileInput] = useState('');
  const [algorithm, setAlgorithm] = useState('sha1');
  const [output, setOutput] = useState('');

  const [textInput2, setTextInput2] = useState('');
  const [fileInput2, setFileInput2] = useState('');
  const [defaultFileInput2, setDefaultFileInput2] = useState('');
  const [output2, setOutput2] = useState('');

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

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
          const fileContent = await readFileContent(fileInputRef.current);
          result = await hashText(fileContent, algorithm);
          // ลบข้อมูลเก่าในช่อง Input1 เมื่อมีการใส่ไฟล์ใหม่
          setTextInput('');
        }
      }

      setOutput(result || '');
    };

    hashInput();
  }, [textInput, fileInput, algorithm]);

  useEffect(() => {
    const hashInput2 = async () => {
      let result = '';

      if (!textInput2 && !fileInput2) {
        result = '';
      } else {
        if (textInput2) {
          result = await hashText(textInput2, algorithm);
        }

        if (fileInput2) {
          const fileContent = await readFileContent(fileInputRef2.current);
          result = await hashText(fileContent, algorithm);
          // ลบข้อมูลเก่าในช่อง Input2 เมื่อมีการใส่ไฟล์ใหม่
          setTextInput2('');
        }
      }

      setOutput2(result || '');
    };

    hashInput2();
  }, [textInput2, fileInput2, algorithm]);

  const handleTextInput = async (e, inputNumber) => {
    const value = e.target.value;
    const result = await hashText(value, algorithm);

    if (inputNumber === 1) {
      setOutput(result || '');
      setTextInput(value);
      setFileInput('');
      setDefaultFileInput('');

      if (fileInputRef.current && fileInputRef.current.value) {
        fileInputRef.current.value = '';
      }
    } else if (inputNumber === 2) {
      setOutput2(result || '');
      setTextInput2(value);
      setFileInput2('');
      setDefaultFileInput2('');

      if (fileInputRef2.current && fileInputRef2.current.value) {
        fileInputRef2.current.value = '';
      }
    }
  };

  const handleFileInput = async (e, inputNumber) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const fr = new FileReader();

      fr.onload = async () => {
        let result = await hashText(fr.result, algorithm);

        if (inputNumber === 1) {
          setFileInput(files[i].name);
          setOutput(result);
          // ลบข้อมูลเก่าในช่อง Input1 เมื่อมีการใส่ไฟล์ใหม่
          setTextInput('');
        } else if (inputNumber === 2) {
          setFileInput2(files[i].name);
          setOutput2(result);
          // ลบข้อมูลเก่าในช่อง Input2 เมื่อมีการใส่ไฟล์ใหม่
          setTextInput2('');
        }
      };

      fr.readAsText(files[i]);
    }
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
        const fileContent = await readFileContent(fileInputRef.current);
        result = await hashText(fileContent, value);
        // ลบข้อมูลเก่าในช่อง Input1 เมื่อมีการเปลี่ยนแปลง Algorithm
        setTextInput('');
      }
    }

    setAlgorithm(value);
    setOutput(result || '');

    result = '';

    if (!textInput2 && !fileInput2) {
      result = '';
    } else {
      if (textInput2) {
        result = await hashText(textInput2, value);
      }

      if (fileInput2) {
        const fileContent = await readFileContent(fileInputRef2.current);
        result = await hashText(fileContent, value);
        // ลบข้อมูลเก่าในช่อง Input2 เมื่อมีการเปลี่ยนแปลง Algorithm
        setTextInput2('');
      }
    }

    setOutput2(result || '');
  };

  const clearFileInput = (inputNumber) => {
    if (inputNumber === 1) {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setFileInput('');
      setOutput('');
      setDefaultFileInput('');
      setTextInput('');
    } else if (inputNumber === 2) {
      if (fileInputRef2.current) {
        fileInputRef2.current.value = '';
      }
      setFileInput2('');
      setOutput2('');
      setDefaultFileInput2('');
      setTextInput2('');
    }
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

  const readFileContent = (fileInputRef) => {
    return new Promise((resolve, reject) => {
      const file = fileInputRef.files[0];
      const fr = new FileReader();

      fr.onload = () => {
        resolve(fr.result);
      };

      fr.onerror = (error) => {
        reject(error);
      };

      fr.readAsText(file);
    });
  };

  // เพิ่ม State สำหรับเก็บผลลัพธ์ของการตรวจสอบ
  const [isMatching, setIsMatching] = useState(false);

  // ฟังก์ชั่นที่จะใช้ในการตรวจสอบว่า Output 1 และ Output 2 ตรงกันหรือไม่
  const checkMatching = () => {
    setIsMatching(output === output2);
  };

  // เรียกใช้ฟังก์ชั่น checkMatching เมื่อมีการเปลี่ยนแปลงใน output หรือ output2
  useEffect(() => {
    checkMatching();
  }, [output, output2]);

  return (
    <section className="x-5 ">
      <div className="hashing-container text-light px-1 mb-1">
        <div className="hashing-content">
          <div className="text-center py-6">
            <h1 className="display-1 fw-bolder mb-1 y-5">
              <span className="text-gradient d-inline bg-light">Investigate</span>
            </h1>
          </div>

          <div className="hashing-form">
            <form>
              <div className="form-group">
                <label htmlFor="text-input">Input 1</label>
                <input
                  type="text"
                  className="form-control y-5"
                  id="text-input"
                  placeholder="Write some text"
                  value={textInput}
                  onChange={(e) => handleTextInput(e, 1)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input">File Input 1</label>
                <input
                  type="file"
                  className="form-control y-5"
                  id="file-input"
                  onChange={(e) => handleFileInput(e, 1)}
                  defaultValue={defaultFileInput}
                  ref={fileInputRef}
                />
                <button
                  type="button"
                  className="btn-gradient text-light y-5"
                  onClick={() => clearFileInput(1)}
                >
                  Clear File
                </button>
              </div>
            </form>
          </div>

          <div className="hashing-form">
            <form>
              <div className="form-group">
                <label htmlFor="text-input2">Input 2</label>
                <input
                  type="text"
                  className="form-control y-5"
                  id="text-input2"
                  placeholder="Write some text"
                  value={textInput2}
                  onChange={(e) => handleTextInput(e, 2)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input2">File Input 2</label>
                <input
                  type="file"
                  className="form-control y-5"
                  id="file-input2"
                  onChange={(e) => handleFileInput(e, 2)}
                  defaultValue={defaultFileInput2}
                  ref={fileInputRef2}
                />
                <button
                  type="button"
                  className="btn-gradient text-light y-5"
                  onClick={() => clearFileInput(2)}
                >
                  Clear File
                </button>
              </div>
            </form>
          </div>

          <div className="hashing-algorithms">
            <h4 className="hashing-algorithms-heading ">Algorithms<i className="bi bi-gear "></i></h4>
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

          <div className="hashed-output">
            <h4 className="hashed-algorithm-heading  text-light">Output 1</h4>
            <div className="hashed-algorithm-container">
              <p className="hashed-algorithm-text">{output}</p>
            </div>
          </div>

          <div className="hashed-output">
            <h4 className="hashed-algorithm-heading text-light">Output 2</h4>
            <div className="hashed-algorithm-container">
              <p className="hashed-algorithm-text">{output2}</p>
            </div>
          </div>

          <div className="check-matching">
            <button
              type="button"
              className={`btn ${isMatching ? 'btn-success' : 'btn-danger'}`}
              onClick={checkMatching}
            >
              Check Matching :
            </button>
            <span className={`matching-result ${isMatching ? 'text-success' : 'text-danger'}`}>
              {isMatching ? 'Matching' : 'Not Matching'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
