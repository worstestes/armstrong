import React from 'react';

export interface MainTextComponent {
    onClick?: () => {};
    children: React.ReactNode;
    style?: Object;
}

export interface SideMenuComponent {
    files: [] | Blob[];
    // onClick?: () => File;
    onClick(file: File): any;
    style?: Object;
}

export interface FileDocument {
    size: number;
    type: string;
    // volume: string;
    // weight: string;
    // boundingBox: string;
    // area: string;
    // centerOfMass: string;
}

export interface FileDocumentList {
    files: FileDocument[];
    onClick(file: File): any;
}
