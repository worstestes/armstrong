import axios from 'axios';

export const modelIDs = ['moon', 'lander', 'astronaut', 'rocket', 'rover', 'satellite']; // temporary references to STL file names

export const modelLabelAndUnits = {
    volume: {
        id: 'volume',
        label: 'Volume',
        unit: 'cm^3',
    },
    weight: {
        id: 'weight',
        label: 'Weight',
        unit: 'grams',
    },
    boundingBox: {
        id: 'boundingBox',
        label: 'Bounding Box',
        unit: 'mm',
    },
    area: {
        id: 'area',
        label: 'Area',
        unit: 'm',
    },
    centerOfMass: {
        id: 'centerOfMass',
        label: 'Center of Mass',
        unit: 'mm',
    },
};

/**
 * Function to read and fetch local models files from _/src/assets/stl_, returning an array of Blobs representing each model file
 */
export const fetchLocalModels = async (): Promise<Blob[]> => {
    try {
        return await Promise.all(
            modelIDs.map((id) =>
                axios(`http://localhost:5000/api/models/${id}`, {
                    method: 'GET',
                    responseType: 'blob',
                }).then((res: any) => new Blob([res.data])),
            ),
        );
    } catch (error) {
        console.error(`Fetch model file failure: ${error}`);
        return [];
    }
};

/**
 * Function to read and fetch metrics + measurement data from a local model file from _/src/assets/stl_, returning an object with necessary data
 */
export const fetchModelsMetrics = async (): Promise<{ [index: string]: number | number[] } | []> => {
    try {
        const indexedMetricsById = {};
        await Promise.all(
            modelIDs.map((id) =>
                axios(`http://localhost:5000/api/models/${id}/metrics`, {
                    method: 'GET',
                }).then((res: any) => (indexedMetricsById[id] = res.data)),
            ),
        );
        return indexedMetricsById;
    } catch (error) {
        console.error(`Fetch model file failure: ${error}`);
        return [];
    }
};
