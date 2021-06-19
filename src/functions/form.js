import axios from '../axios';

export const postFormData = async (details, authtoken) =>
await axios.post('/formPost', details,
{ headers: { authtoken } }
);

export const postGetData = async () =>
await axios.get('/formGet');

export const getOwnerData = async (authtoken) =>
await axios.get('/Owner/formGet',
{ headers: { authtoken } }
);