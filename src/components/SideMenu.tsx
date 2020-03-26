import React from 'react';

const SideMenu: React.FC<any> = ({ onClick, children, style }) => (
    <div id="sideMenu" onClick={onClick} style={style}>
        {children}
    </div>
);

export default SideMenu;
