import React, { Component } from 'react';
// import axios from 'axios';
import { HomeState } from './models/state';

import SideMenu from '../components/SideMenu';
import FileViewer from '../components/FileViewer';

import { fetchLocalModels } from '../helpers/';

class Home extends Component {
    state: HomeState = {
        sideMenuOpen: true,
        blobs: [],
        selectedBlob: null,
    };

    async componentDidMount() {
        const blobs = (await fetchLocalModels()) || [];
        this.setState({
            blobs,
        });
    }
    selectFile = (file: File) => {
        this.setState({
            selectedBlob: file,
        });
    };

    render() {
        const { sideMenuOpen, selectedBlob } = this.state;
        const menuView = sideMenuOpen ? <SideMenu onClick={this.selectFile} files={this.state.blobs} /> : null;

        return (
            <div id="home">
                {menuView}
                <FileViewer selectedBlob={selectedBlob} />
            </div>
        );
    }
}

export default Home;
