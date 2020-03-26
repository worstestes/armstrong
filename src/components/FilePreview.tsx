import React from 'react';

const FilePreview: React.FC<any> = ({ onClick, children, style }) => (
    <div className="filePreview" onClick={onClick} style={style}>
        {children}
    </div>
);

export default FilePreview;
