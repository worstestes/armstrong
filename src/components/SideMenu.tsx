import React from 'react';

const SideMenu: React.FC<any> = ({ onClick, children, style }) => (
    <div onClick={onClick} style={style}>
        {children}
    </div>
);

export default SideMenu;
