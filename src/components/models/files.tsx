// import React from 'react';

export interface FileDocument {
    volume: string;
    weight: string;
    boundingBox: string;
    area: string;
    centerOfMass: string;
}

export interface FileDocumentList {
    files: FileDocument[];
}
