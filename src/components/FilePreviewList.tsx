import React from 'react';
import { FileDocumentList } from './models/files';
import FilePreview from './FilePreview';

const FilePreviewList: React.FC<FileDocumentList> = ({ files }) => (
    <div className="file-preview-list">
        {files.map((file: any, i: number) => (
            <FilePreview key={i} file={file} />
        ))}
    </div>
);

export default FilePreviewList;
