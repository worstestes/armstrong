import React, { Component } from 'react';
import { STLViewer } from 'react-stl-obj-viewer';
import Modal from 'react-modal';
import { ChromePicker } from 'react-color';

class FileViewer extends Component<any> {
    state = {
        testColor: 'white',
    };
    render() {
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
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel="STL file viewer modal"
            >
                <div className="upload-container">
                    <div className="input-container">
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
                        color={this.state.testColor}
                        onChange={(color: any) => this.setState({ testColor: color.hex })}
                        onChangeComplete={(color: any) => this.setState({ testColor: color.hex })}
                    />
                    <div className="viewer-canvas">
                        {selectedFile ? (
                            <STLViewer file={selectedFile} width={500} modelColor={this.state.testColor} />
                        ) : null}
                    </div>
                </div>
            </Modal>
        );
    }
}

export default FileViewer;
