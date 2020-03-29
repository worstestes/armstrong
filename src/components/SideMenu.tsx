import React from 'react';
import FilePreviewList from './FilePreviewList';
import { SideMenuComponent } from './models';

const SideMenu: React.FC<SideMenuComponent> = ({ files, onClick, style }) => {
    console.log(files);
    return (
        <div id="side-menu" style={style}>
            <FilePreviewList onClick={onClick} files={files} />
        </div>
    );
};

export default SideMenu;
