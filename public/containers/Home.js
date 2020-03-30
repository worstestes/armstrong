import React, { Component } from 'react';
import SideMenu from '../components/SideMenu';
import FileViewer from '../components/FileViewer';
import MetricsViewer from '../components/MetricsViewer';
import { fetchLocalModels, fetchModelsMetrics } from '../helpers/';
class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            sideMenuOpen: true,
            files: [],
            fileMetrics: {},
            selectedFile: null,
            selectedFileId: '',
            modalOpen: false,
        };
        this.selectFile = (file, fileName) => {
            this.setState({
                selectedFile: file,
                selectedFileId: fileName,
                modalOpen: true,
            });
        };
        this.closeModal = () => {
            this.setState({
                selectedFile: null,
                modalOpen: false,
            });
        };
    }
    async componentDidMount() {
        const files = (await fetchLocalModels()) || [];
        const fileMetrics = (await fetchModelsMetrics()) || [];
        this.setState({
            files,
            fileMetrics,
        });
    }
    render() {
        const { sideMenuOpen, fileMetrics, selectedFile, selectedFileId, modalOpen } = this.state;
        const menuView = sideMenuOpen ? React.createElement(SideMenu, { onClick: this.selectFile, files: this.state.files }) : null;
        console.log(fileMetrics);
        console.log(selectedFileId);
        console.log(fileMetrics[selectedFileId]);
        const metricsModalView = modalOpen && fileMetrics[selectedFileId] ? (React.createElement(MetricsViewer, { selectedFileMetrics: fileMetrics[selectedFileId] })) : null;
        return (React.createElement("div", { id: "home" },
            modalOpen ? null : menuView,
            React.createElement(FileViewer, { selectedFile: selectedFile, modalOpen: modalOpen, closeModal: this.closeModal }),
            metricsModalView,
            React.createElement("div", null,
                React.createElement("div", { className: "space stars1" }),
                React.createElement("div", { className: "space stars2" }),
                React.createElement("div", { className: "space stars3" }))));
    }
}
export default Home;
//# sourceMappingURL=Home.js.map