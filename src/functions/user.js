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
