import React, { Component } from 'react';
import { HomeState } from './models/state';

import SideMenu from '../components/SideMenu';
import FileViewer from '../components/FileViewer';
import MetricsViewer from '../components/MetricsViewer';

import { fetchLocalModels, fetchModelsMetrics } from '../helpers/';

class Home extends Component {
    state: HomeState = {
        sideMenuOpen: true,
        files: [],
        fileMetrics: {},
        selectedFile: null,
        selectedFileId: '',
        modalOpen: false,
    };

    async componentDidMount() {
        const files = (await fetchLocalModels()) || [];
        const fileMetrics = (await fetchModelsMetrics()) || [];
        this.setState({
            files,
            fileMetrics,
        });
    }
    selectFile = (file: File, fileName: string) => {
        this.setState({
            selectedFile: file,
            selectedFileId: fileName,
            modalOpen: true,
        });
    };

    closeModal = () => {
        this.setState({
            selectedFile: null,
            modalOpen: false,
        });
    };

    render() {
        const { sideMenuOpen, fileMetrics, selectedFile, selectedFileId, modalOpen } = this.state;
        const menuView = sideMenuOpen ? <SideMenu onClick={this.selectFile} files={this.state.files} /> : null;
        const metricsModalView =
            modalOpen && fileMetrics[selectedFileId] ? (
                <MetricsViewer selectedFileId={selectedFileId} selectedFileMetrics={fileMetrics[selectedFileId]} />
            ) : null;

        return (
            <div id="home">
                {modalOpen ? null : menuView}
                <FileViewer selectedFile={selectedFile} modalOpen={modalOpen} closeModal={this.closeModal} />
                {metricsModalView}
                <div>
                    <div className="space stars1"></div>
                    <div className="space stars2"></div>
                    <div className="space stars3"></div>
                </div>
            </div>
        );
    }
}

export default Home;
