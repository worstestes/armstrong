import React from 'react';
import { FilePreviewComponent } from './models';

/**
 * Single default model file preview
 */
const FilePreviewListItem: React.FC<FilePreviewComponent> = ({ file, fileName, onClick }) => {
    let image;
    try {
        image = require(`../assets/images/${fileName}.png`);
    } catch (error) {
        image = null;
    }
    return (
        <div onClick={() => onClick(file, fileName)} className="file-preview">
            <img src={image} style={{ width: '100%', height: '100%' }} alt="file-preview" />
        </div>
    );
};

export default FilePreviewListItem;
