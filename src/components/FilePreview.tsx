import React from 'react';

const FilePreview: React.FC<any> = ({ file, fileName, onClick }) => {
    let image;
    try {
        image = require(`../assets/images/${fileName}.png`);
    } catch (error) {
        image = null;
    }
    return (
        <div onClick={() => onClick(file)} className="file-preview">
            <img src={image} style={{ width: '100%', height: '100%' }} alt="file-preview" />
        </div>
    );
};

export default FilePreview;
