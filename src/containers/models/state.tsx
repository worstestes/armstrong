export interface HomeState {
    sideMenuOpen: boolean;
    files: [] | Blob[];
    selectedFile: Blob | null;
    modalOpen: boolean;
}
