import urlCreate from './createAxios';

export default async function deleteAxios(endpoint, id) {
    try {
        const response = await urlCreate.delete(`${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}
