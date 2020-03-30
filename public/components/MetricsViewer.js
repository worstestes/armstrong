import React, { Component } from 'react';
class MetricsViewer extends Component {
    render() {
        console.log(this.props.selectedFileMetrics);
        return (React.createElement("div", { style: {
                position: 'absolute',
                zIndex: 2,
                width: 350,
                height: 600,
                borderRadius: 5,
                backgroundColor: 'white',
                right: 50,
            } }));
    }
}
export default MetricsViewer;
//# sourceMappingURL=MetricsViewer.js.map