import React from 'react';
import { FileDocumentList } from './models';
import FilePreviewListItem from './FilePreviewListItem';

import { modelIDs } from '../helpers';

/**
 * List of default model file previews
 */
const FilePreviewList: React.FC<FileDocumentList> = ({ files, onClick }) => (
    <div className="file-preview-list">
        {files.map((file: any, i: number) => (
            <FilePreviewListItem key={i} file={file} fileName={modelIDs[i]} onClick={onClick} />
        ))}
        <div className="upload-container">
            <label className="upload-label">
                Or upload your own STL file
                <input
                    className="upload-input"
                    type="file"
                    name="obj-file"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        const target = e.target as HTMLInputElement;
                        const files = target.files || [];
                        const fileName = files[0].name;
                        return onClick(files[0], fileName.slice(0, fileName.length - 4));
                    }}
                />
            </label>
        </div>
    </div>
);

export default FilePreviewList;
