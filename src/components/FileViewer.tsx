import React, { Component } from 'react';
import { STLViewer } from 'react-stl-obj-viewer';
import Modal from 'react-modal';
import { ChromePicker } from 'react-color';

class FileViewer extends Component<any> {
    state = {
        modelColor: 'white',
    };
    render() {
        const { modelColor } = this.state;
        const { selectedFile, modalOpen, closeModal } = this.props;
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
            },
        };

        return (
            <Modal isOpen={modalOpen} style={customStyles} contentLabel="STL file viewer modal">
                <div className="modal-container">
                    <div className="modal-header">
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'flex-end',
                                paddingTop: 10,
                            }}
                        >
                            <img
                                onClick={() => closeModal()}
                                className="close-button"
                                src={require('../assets/images/close.png')}
                                alt="close"
                            />
                        </div>
                    </div>
                    <ChromePicker
                        color={modelColor}
                        onChange={(color: any) => this.setState({ modelColor: color.hex })}
                        onChangeComplete={(color: any) => this.setState({ modelColor: color.hex })}
                    />
                    <div className="viewer-canvas">
                        {selectedFile ? <STLViewer file={selectedFile} width={500} modelColor={modelColor} /> : null}
                    </div>
                </div>
            </Modal>
        );
    }
}

export default FileViewer;
