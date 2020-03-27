import React, { Component } from 'react';
import { STLViewer } from 'react-stl-obj-viewer';

class FileViewer extends Component {
    state = {
        stlFile: null,
    };

    render() {
        return (
            <div className="upload-container">
                <label id="file-input-label" htmlFor="obj-file">
                    Load STL by file
                    <br />
                    <input
                        type="file"
                        name="obj-file"
                        onChange={(e: any) => {
                            console.log(e.target.files);
                            this.setState({
                                stlFile: e.target.files[0],
                            });
                        }}
                    />
                </label>
                <div className="viewer-canvas">
                    {this.state.stlFile ? (
                        <STLViewer
                            onSceneRendered={(element: any) => {
                                console.log(element);
                            }}
                            file={this.state.stlFile}
                            width={500}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default FileViewer;
