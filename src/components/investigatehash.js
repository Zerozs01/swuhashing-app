import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './hashing2.css';

export default function HashingForm() {
    const [algorithms] = useState(['sha1', 'sha256', 'sha384', 'sha512']);
    const [text_input, setTextInput] = useState('');
    const [file_input, setFileInput] = useState('');
    const [algorithm, setAlgorithm] = useState('sha1');
    const [output, setOutput] = useState('');
    const [text_input_2, setTextInput2] = useState('');
    const [file_input_2, setFileInput2] = useState('');
    const [output_2, setOutput2] = useState('');
    const [outputMatch, setOutputMatch] = useState(null);

    const handleTextInput = async (e, inputNumber) => {
        let value = e.target.value;
        let result = await hashValue(value, algorithm);

        if (inputNumber === 1) {
            setTextInput(value);
            setOutput(result);
        } else if (inputNumber === 2) {
            setTextInput2(value);
            setOutput2(result);
        }
    }

    const handleFileInput = async (e, inputNumber) => {
        const files = e.target.files;
        let folderHash = '';

        for (let i = 0; i < files.length; i++) {
            const fr = new FileReader();

            fr.onload = async () => {
                let result = await hashValue(fr.result, algorithm);

                if (inputNumber === 1) {
                    setFileInput(files[i].name); // เก็บชื่อไฟล์
                    setOutput(result);
                } else if (inputNumber === 2) {
                    setFileInput2(files[i].name); // เก็บชื่อไฟล์
                    setOutput2(result);
                }

                folderHash += result + '\n'; // เพิ่ม hash ของแต่ละไฟล์เข้าไปใน folderHash
            }

            fr.readAsText(files[i]);
        }

        setOutput(folderHash); // เก็บ hash ของโฟลเดอร์ทั้งหมด
    }

    const handleAlgorithmChange = async (e) => {
        let value = e.target.value;
        let result = await hashValue(getInputValue(1), value);

        setAlgorithm(value);
        setOutput(result);

        result = await hashValue(getInputValue(2), value);
        setOutput2(result);
    }

    const getInputValue = (inputNumber) => {
        return inputNumber === 1 ? text_input : text_input_2;
    }

    const hashValue = async (value, hashAlgorithm) => {
        let result = '';

        switch (hashAlgorithm) {
            case 'sha1':
                result = CryptoJS.SHA1(value).toString();
                break;
            case 'sha256':
                result = CryptoJS.SHA256(value).toString();
                break;
            case 'sha384':
                result = CryptoJS.SHA384(value).toString();
                break;
            case 'sha512':
                result = CryptoJS.SHA512(value).toString();
                break;
            default:
                break;
        }

        return result;
    }

    // เพิ่มฟังก์ชันเพื่อตรวจสอบค่า output 1 กับ output 2
    const checkOutputs = () => {
        if (output === output_2) {
            setOutputMatch(true);
        } else {
            setOutputMatch(false);
        }
    }

    return (
        <section className="x-5 mt-4"><br></br>
            <div className='hashing-container text-light px-1 mb-1 mt-1 '>
                <div className='hashing-content'>
                    <div className="text-center py-8">
                        <h2 className="display-1 fw-bolder mb-1 y-5"><span className="text-gradient d-inline bg-light">Investigate</span></h2>
                    </div>

                    <div className="hashing-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="text-input">Input text 1</label>
                                <input type="text" className="form-control y-5" id="text-input" placeholder="Write some text" value={text_input} onChange={(e) => handleTextInput(e, 1)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="file-input">File Input 1</label>
                                <input type="file" className="form-control y-5" id="file-input" onChange={(e) => handleFileInput(e, 1)} />
                                <p>Selected File: {file_input}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="text-input-2">Input text 2</label>
                                <input type="text" className="form-control y-5" id="text-input-2" placeholder="Write some text" value={text_input_2} onChange={(e) => handleTextInput(e, 2)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="file-input-2">File Input 2</label>
                                <input type="file" className="form-control y-5" id="file-input-2" onChange={(e) => handleFileInput(e, 2)} />
                                <p>Selected File: {file_input_2}</p>
                            </div>
                        </form>
                    </div>

                    <div className="hashing-algorithms">
                        <h4 className="hashing-algorithms-heading text-gradient">Algorithms</h4>
                        <div className="hashing-algorithms-list">
                            {algorithms.map(algo => (
                                <div className="form-check y-5" key={algo}>
                                    <input className="form-check-input" type="radio" name="algorithm" id={algo} value={algo} checked={algorithm === algo} onChange={handleAlgorithmChange} />
                                    <label className="form-check-label" htmlFor={algo}>
                                        {algo}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hashed-output">
                        <h4 className="hashed-algorithm-heading text-gradient">Output 1</h4>
                        <div className="hashed-algorithm-container">
                            <p className="hashed-algorithm-text ">
                                {output}
                            </p>
                        </div>
                    </div>

                    <div className="hashed-output">
                        <h4 className="hashed-algorithm-heading text-gradient">Output 2</h4>
                        <div className="hashed-algorithm-container">
                            <p className="hashed-algorithm-text ">
                                {output_2}
                            </p>
                        </div>
                    </div>

                    {/* เพิ่มปุ่มเพื่อเรียกใช้งานฟังก์ชัน checkOutputs */}
                    <button type="button" onClick={checkOutputs}>Check Outputs</button>

                    {/* แสดงผลลัพธ์ของการตรวจสอบ */}
                    {outputMatch !== null && (
                        <div className="output-match-info">
                            {outputMatch ? (
                                <p className='text-success text-center'><h1>ค่าทั้งคู่ตรงกัน</h1></p>
                            ) : (
                                <p className="text-danger text-center"><h1>ค่าทั้งคู่ไม่เหมือนกัน</h1></p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
