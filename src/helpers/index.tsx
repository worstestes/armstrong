import axios from 'axios';

export const modelIDs = ['moon', 'lander', 'astronaut', 'rocket', 'rover', 'satellite']; // temporary references to STL file names

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
