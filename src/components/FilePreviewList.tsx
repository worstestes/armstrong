import React from 'react';
import { FileDocumentList } from './models';
import FilePreview from './FilePreview';

import { modelIDs } from '../helpers';

const FilePreviewList: React.FC<FileDocumentList> = ({ files, onClick }) => (
    <div className="file-preview-list">
        {files.map((file: any, i: number) => (
            <FilePreview key={i} file={file} fileName={modelIDs[i]} onClick={onClick} />
        ))}
        <div className="upload-container" style={{ padding: 3 }}>
            <label className="upload-label">
                Or upload your own STL file
                <input
                    className="upload-input"
                    type="file"
                    name="obj-file"
                    onChange={(e: any) => {
                        return onClick(e.target.files[0]);
                    }}
                />
            </label>
        </div>
    </div>
);

export default FilePreviewList;
