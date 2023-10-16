import urlCreate from './createAxios';

export default async function postAxios(endpoint, body) {
	try {
		const response = await urlCreate.post(endpoint, body);
		return response.data;
	} catch (error) {
		return error.response;
	}
}