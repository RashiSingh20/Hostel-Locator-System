import axios from '../axios';

export const postUserData = async (userObject, authtoken) => 
 await axios.post('/userPost', 
{userObject}, 
{ headers: { authtoken } }
);

export const currentUser = async (authtoken) =>
 await axios.post('/currentUser', 
{},
{ headers: { authtoken } }
);

export const addToBookmark = async (authtoken, formId) =>
await axios.post('/user/bookmark/',
{formId},
{ headers: { authtoken } }
);

export const getBookmark = async (authtoken) =>
await axios.get('/user/bookmark',
{ headers: { authtoken } }
);

export const removeFromBookmark = async (authtoken, formId) =>
await axios.put(`/user/bookmark/${formId}`,
{},
{ headers: { authtoken } }
);
