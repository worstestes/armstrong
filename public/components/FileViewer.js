import React, { Component } from 'react';
import { STLViewer } from 'react-stl-obj-viewer';
import Modal from 'react-modal';
import { ChromePicker } from 'react-color';
class FileViewer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            modelColor: 'white',
        };
    }
    render() {
        const { modelColor } = this.state;
        const { selectedFile, modalOpen, closeModal } = this.props;
        const customStyles = {
            content: {
                top: '50%',
                left: '45%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            },
        };
        return (React.createElement(Modal, { isOpen: modalOpen, style: customStyles, contentLabel: "STL file viewer modal" },
            React.createElement("div", { className: "modal-container" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("div", { style: {
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-end',
                            paddingTop: 10,
                        } },
                        React.createElement("img", { onClick: () => closeModal(), className: "close-button", src: require('../assets/images/close.png'), alt: "close" }))),
                React.createElement(ChromePicker, { color: modelColor, onChange: (color) => this.setState({ modelColor: color.hex }), onChangeComplete: (color) => this.setState({ modelColor: color.hex }) }),
                React.createElement("div", { className: "viewer-canvas" }, selectedFile ? React.createElement(STLViewer, { file: selectedFile, width: 500, modelColor: modelColor }) : null))));
    }
}
export default FileViewer;
//# sourceMappingURL=FileViewer.js.map