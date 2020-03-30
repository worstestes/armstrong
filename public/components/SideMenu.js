import React from 'react';
import FilePreviewList from './FilePreviewList';
const SideMenu = ({ files, onClick, style }) => {
    return (React.createElement("div", { id: "side-menu", style: style },
        React.createElement(FilePreviewList, { onClick: onClick, files: files })));
};
export default SideMenu;
//# sourceMappingURL=SideMenu.js.map