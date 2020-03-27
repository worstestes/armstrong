import React, { Component } from 'react';
import { STLViewer } from 'react-stl-obj-viewer';

class FileViewer extends Component<any> {
    state = {
        stlFile: null,
    };

    updateModel = (file: File) => {
        const { stlFile } = this.state;

        if (stlFile !== null) {
            this.setState({
                stlFile: null,
            });
        }

        this.setState({
            stlFile: file,
        });
    };

    render() {
        const { stlFile } = this.state;
        const { selectedBlob } = this.props;

        return (
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
                        {!stlFile ? (
                            <label id="file-input-label" htmlFor="obj-file">
                                Load STL by file
                                <br />
                                <input
                                    type="file"
                                    name="obj-file"
                                    onChange={(e: { target: HTMLInputElement }) => this.updateModel(e.target.files![0])}
                                />
                            </label>
                        ) : (
                            <img
                                onClick={() => this.setState({ stlFile: null })}
                                className="close-button"
                                src={require('../assets/images/close.png')}
                                alt="close"
                            />
                        )}
                    </div>
                </div>
                <div className="viewer-canvas">
                    {stlFile ? (
                        <STLViewer
                            onSceneRendered={(element: any) => {
                                console.log(element);
                            }}
                            file={stlFile}
                            width={500}
                            modelColor="coral"
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default FileViewer;
