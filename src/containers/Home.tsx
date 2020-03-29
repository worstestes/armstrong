import React, { Component } from 'react';
import { HomeState } from './models/state';

import SideMenu from '../components/SideMenu';
import FileViewer from '../components/FileViewer';

import { fetchLocalModels } from '../helpers/';

class Home extends Component {
    state: HomeState = {
        sideMenuOpen: true,
        files: [],
        selectedFile: null,
        modalOpen: false,
    };

    async componentDidMount() {
        const files = (await fetchLocalModels()) || [];
        this.setState({
            files,
        });
    }
    selectFile = (file: File) => {
        this.setState({
            selectedFile: file,
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
        const { sideMenuOpen, selectedFile, modalOpen } = this.state;
        const menuView = sideMenuOpen ? <SideMenu onClick={this.selectFile} files={this.state.files} /> : null;

        return (
            <div id="home">
                {menuView}
                <FileViewer
                    selectedFile={selectedFile}
                    selectFile={(file: File) => {
                        this.setState({
                            selectedFile: null,
                        });
                        this.selectFile(file);
                    }}
                    modalOpen={modalOpen}
                    closeModal={this.closeModal}
                />
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
