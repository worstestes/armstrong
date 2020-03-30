import React from 'react';
import FilePreviewListItem from './FilePreviewListItem';
import { modelIDs } from '../helpers';
/**
 * List of default model file previews
 */
const FilePreviewList = ({ files, onClick }) => (React.createElement("div", { className: "file-preview-list" },
    files.map((file, i) => (React.createElement(FilePreviewListItem, { key: i, file: file, fileName: modelIDs[i], onClick: onClick }))),
    React.createElement("div", { className: "upload-container" },
        React.createElement("label", { className: "upload-label" },
            "Or upload your own STL file",
            React.createElement("input", { className: "upload-input", type: "file", name: "obj-file", onChange: (e) => {
                    const target = e.target;
                    const files = target.files || [];
                    const fileName = files[0].name;
                    return onClick(files[0], fileName.slice(0, fileName.length - 4));
                } })))));
export default FilePreviewList;
//# sourceMappingURL=FilePreviewList.js.map