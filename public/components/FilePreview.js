import React from 'react';
const FilePreview = ({ file, fileName, onClick }) => {
    let image;
    try {
        image = require(`../assets/images/${fileName}.png`);
    }
    catch (error) {
        image = null;
    }
    return (React.createElement("div", { onClick: () => onClick(file, fileName), className: "file-preview" },
        React.createElement("img", { src: image, style: { width: '100%', height: '100%' }, alt: "file-preview" })));
};
export default FilePreview;
//# sourceMappingURL=FilePreview.js.map