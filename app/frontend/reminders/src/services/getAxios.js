import urlCreate from './createAxios';

export default async function getAxios(endpoint) {
	try {
		const response = await urlCreate.get(endpoint);
		return response.data;
	} catch (error) {
		return error.response;
	}
}