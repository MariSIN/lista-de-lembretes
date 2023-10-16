import axios from 'axios';

const urlCreate = axios.create({
	baseURL: 'http://localhost:3001',
});

export default urlCreate;
