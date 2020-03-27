export interface HomeState {
    sideMenuOpen: boolean;
    blobs: [] | Blob[];
    selectedBlob: Blob | null;
}
