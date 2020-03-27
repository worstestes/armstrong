import React from 'react';
import { MainTextComponent } from './models';

const MainText: React.FC<MainTextComponent> = ({ onClick, children, style }) => (
    <div onClick={onClick} style={style}>
        {children}
    </div>
);

export default MainText;
