import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStateValue } from './StateProvider';

/* The 'props' object has a property called 'component' and we're assigning it to a variable called 'Component' because custom components in React need to have first letter capitalized.
Spread out whatever is left out in the 'props' and reassign it to a variable called 'rest'. */
const PrivateRoute = ({ component: Component, ...rest }) => {
    const [{user}] = useStateValue();
    return (
        <>
        <Route
            {...rest}
            render={(props) => {
                return (user && user.token) ? (
                    <Component {...props} />  /* The 'props' here are our custom Components's props. */
                ) : (
                    <Redirect to='/Detail' />
                )
            }}
        />
        </>
    );
};

export default PrivateRoute;