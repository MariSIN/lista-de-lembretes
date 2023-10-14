import urlCreate from './createAxios';

export default async function getAxios(endpoint) {
	try {
		const response = await urlCreate.get(endpoint);
		return response;
	} catch (error) {
		return error.response;
	}
}