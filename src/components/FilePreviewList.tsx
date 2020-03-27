import React from 'react';
import { FileDocumentList } from './models';
import FilePreview from './FilePreview';

import { modelIDs } from '../helpers';

const FilePreviewList: React.FC<FileDocumentList> = ({ files, onClick }) => (
    <div className="file-preview-list">
        {files.map((file: any, i: number) => (
            <FilePreview key={i} file={file} fileName={modelIDs[i]} onClick={onClick} />
        ))}
    </div>
);

export default FilePreviewList;
