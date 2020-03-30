import React from 'react';
import MainText from './MainText';
import { modelLabelAndUnits } from '../helpers';
const MetricsViewer = ({ selectedFileId, selectedFileMetrics }) => {
    return (React.createElement("div", { className: "metrics-modal" },
        React.createElement(MainText, { className: "modal-title" },
            selectedFileId,
            ".stl"),
        Object.keys(modelLabelAndUnits).map((key, i) => {
            let measurement = Number.parseFloat(selectedFileMetrics[key]).toFixed(6);
            let label = modelLabelAndUnits[key].label;
            let unit = modelLabelAndUnits[key].unit;
            if (measurement.includes('-')) {
                measurement = measurement.replace(/-/, '');
            }
            if (key === 'boundingBox') {
                return (React.createElement("div", { className: "metric-detail-container", key: i },
                    React.createElement(MainText, { key: i, className: "metrics-label" }, label),
                    selectedFileMetrics[key].map((num, i) => {
                        let coord = '';
                        if (i === 0) {
                            coord = 'x';
                        }
                        if (i === 1) {
                            coord = 'y';
                        }
                        if (i === 2) {
                            coord = 'z';
                        }
                        return (React.createElement(MainText, { key: i, className: "metrics", style: { marginLeft: 25 } }, `${coord}: ${num.toFixed(6)} mm`));
                    })));
            }
            return (React.createElement("div", { className: "metric-detail-container", key: i },
                React.createElement(MainText, { className: "metrics-label" }, label),
                React.createElement(MainText, { className: "metrics" },
                    measurement,
                    " ",
                    unit)));
        })));
};
export default MetricsViewer;
//# sourceMappingURL=MetricsViewer.js.map