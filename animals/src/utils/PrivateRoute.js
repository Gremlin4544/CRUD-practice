import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const token = window.localStorage.getItem('token')

    
    return (
        <Route
            {...rest}
            render={props => 
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
            //if you do this as a terniary operator you have to change the const name from token to something else to avoid creashing and dbl calling from the getItem function = this is why const is commented out here
        />
    );
};

export default PrivateRoute;