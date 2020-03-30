import React from 'react';
import { MainTextComponent } from './models';

/**
 * Primary text component with interchangable _className_, _onClick_ function, _children_ (string) and _style_
 */
const MainText: React.FC<MainTextComponent> = ({ className, onClick, children, style }) => (
    <div className={className} onClick={onClick} style={style}>
        {children}
    </div>
);

export default MainText;
