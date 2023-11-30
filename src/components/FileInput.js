// สร้างไฟล์ใหม่ชื่อ FileInput.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useDropzone } from 'react-dropzone';

const FileInput = ({ onFileSelect }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p><i className="bi bi-file-earmark-arrow-down"></i>Click here to select a file or enter text</p>
    </div>
  );
};

// Add propTypes validation
FileInput.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileInput;
