import React from 'react';

export interface MainTextComponent {
    className?: string;
    onClick?: () => {};
    children: React.ReactNode;
    style?: Object;
}

export interface SideMenuComponent {
    files: [] | Blob[];
    onClick(file: File, fileName: string): any;
    style?: Object;
}

export interface FileDocument {
    size: number;
    type: string;
}

export interface FileDocumentList {
    files: FileDocument[];
    onClick(file: File, fileName: string): any;
}

export interface FilePreviewComponent {
    file: File;
    fileName: string;
    onClick(file: File, fileName: string): any;
}

export interface FileViewerComponent {
    selectedFile: Blob | null;
    modalOpen: boolean;
    closeModal: () => void;
}

export interface fileMetrics {
    volume: number;
    weight: number;
    boundingBox: number[];
    area: number;
    centerOfMass: number[];
}

export interface MetricsModalContainer {
    selectedFileId: string;
    selectedFileMetrics: fileMetrics;
}
