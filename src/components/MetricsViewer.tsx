import React from 'react';
import MainText from './MainText';

import { MetricsModalContainer } from './models';

import { modelLabelAndUnits } from '../helpers';

const MetricsViewer: React.FC<MetricsModalContainer> = ({ selectedFileId, selectedFileMetrics }) => {
    return (
        <div className="metrics-modal">
            <MainText className="modal-title">{selectedFileId}.stl</MainText>
            {Object.keys(modelLabelAndUnits).map((key: any, i: number) => {
                let measurement = Number.parseFloat(selectedFileMetrics[key]).toFixed(6);
                let label = modelLabelAndUnits[key].label;
                let unit = modelLabelAndUnits[key].unit;

                if (measurement.includes('-')) {
                    measurement = measurement.replace(/-/, '');
                }

                if (key === 'boundingBox') {
                    return (
                        <div className="metric-detail-container" key={i}>
                            <MainText key={i} className="metrics-label">
                                {label}
                            </MainText>
                            {selectedFileMetrics[key].map((num: number, i: number) => {
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
                                return (
                                    <MainText
                                        key={i}
                                        className="metrics"
                                        style={{ marginLeft: 25 }}
                                    >{`${coord}: ${num.toFixed(6)} mm`}</MainText>
                                );
                            })}
                        </div>
                    );
                }
                return (
                    <div className="metric-detail-container" key={i}>
                        <MainText className="metrics-label">{label}</MainText>
                        <MainText className="metrics">
                            {measurement} {unit}
                        </MainText>
                    </div>
                );
            })}
        </div>
    );
};

export default MetricsViewer;
