import React from 'react';
import FilePreviewList from './FilePreviewList';
import { SideMenuComponent } from './models';

/**
 * Side menu for default model file previews and upload functionality
 */
const SideMenu: React.FC<SideMenuComponent> = ({ files, onClick, style }) => {
    return (
        <div id="side-menu" style={style}>
            <FilePreviewList onClick={onClick} files={files} />
        </div>
    );
};

export default SideMenu;
