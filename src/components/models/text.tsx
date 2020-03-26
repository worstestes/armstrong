import React from 'react';

export interface MainTextComponent {
    onClick?: () => {};
    children: React.ReactNode;
    style?: Object;
}
