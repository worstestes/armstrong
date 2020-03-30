import { fileMetrics } from '../../components/models';

export type indexedMetrics = { [index: string]: fileMetrics };

export interface HomeState {
    sideMenuOpen: boolean;
    files: [] | Blob[];
    fileMetrics: indexedMetrics;
    selectedFile: Blob | null;
    selectedFileId: string;
    modalOpen: boolean;
}
