import axios from '../axios';

export const postFormData = async (details, authtoken) =>
await axios.post('/formPost', details,
{ headers: { authtoken } }
);

export const postGetData = async () =>
await axios.get('/formGet');