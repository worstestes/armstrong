import React from 'react';
import FilePreviewList from './FilePreviewList';

const SideMenu: React.FC<any> = ({ onClick, children, style }) => (
    <div id="sideMenu" onClick={onClick} style={style}>
        {children}
        <FilePreviewList
            files={[
                {
                    volume: '1234',
                    weight: '1234',
                    boundingBox: '1234',
                    area: '1234',
                    centerOfMass: '1234',
                },
                {
                    volume: '5678',
                    weight: '5678',
                    boundingBox: '5678',
                    area: '5678',
                    centerOfMass: '5678',
                },
                {
                    volume: '9090',
                    weight: '9090',
                    boundingBox: '9090',
                    area: '9090',
                    centerOfMass: '9090',
                },
            ]}
        />
    </div>
);

export default SideMenu;
