import React from 'react';
import FilePreview from './FilePreview';
import { modelIDs } from '../helpers';
const FilePreviewList = ({ files, onClick }) => (React.createElement("div", { className: "file-preview-list" },
    files.map((file, i) => (React.createElement(FilePreview, { key: i, file: file, fileName: modelIDs[i], onClick: onClick }))),
    React.createElement("div", { className: "upload-container", style: { padding: 3 } },
        React.createElement("label", { className: "upload-label" },
            "Or upload your own STL file",
            React.createElement("input", { className: "upload-input", type: "file", name: "obj-file", onChange: (e) => {
                    const fileName = e.target.files[0].name;
                    return onClick(e.target.files[0], fileName.slice(0, fileName.length - 4));
                } })))));
export default FilePreviewList;
//# sourceMappingURL=FilePreviewList.js.map