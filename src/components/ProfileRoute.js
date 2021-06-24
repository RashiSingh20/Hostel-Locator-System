import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/* The 'props' object has a property called 'component' and we're assigning it to a variable called 'Component' because custom components in React need to have first letter capitalized.
Spread out whatever is left out in the 'props' and reassign it to a variable called 'rest'. */
const ProfileRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
        <Route
            {...rest}
            render={(props) => {
                return (user && user.token) ? (
                    <Component {...props} />  /* The 'props' here are our custom Components's props. */
                ) : (
                    <Redirect to='/' />
                )
            }}
        />
        </>
    );
};

export default ProfileRoute;