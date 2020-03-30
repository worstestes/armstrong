import axios from 'axios';
export const modelIDs = ['moon', 'lander', 'astronaut', 'rocket', 'rover', 'satellite']; // temporary references to STL file names
export const fetchLocalModels = async () => {
    try {
        return await Promise.all(modelIDs.map((id) => axios(`http://localhost:5000/api/models/${id}`, {
            method: 'GET',
            responseType: 'blob',
        }).then((res) => new Blob([res.data]))));
    }
    catch (error) {
        console.error(`Fetch model file failure: ${error}`);
        return [];
    }
};
export const fetchModelsMetrics = async () => {
    try {
        const indexedMetricsById = {};
        await Promise.all(modelIDs.map((id) => axios(`http://localhost:5000/api/models/${id}/metrics`, {
            method: 'GET',
        }).then((res) => (indexedMetricsById[id] = res.data))));
        return indexedMetricsById;
    }
    catch (error) {
        console.error(`Fetch model file failure: ${error}`);
        return [];
    }
};
//# sourceMappingURL=index.js.map