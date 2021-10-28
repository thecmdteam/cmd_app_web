import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectectedRoutes = ({Component: Component, ...rest}) => {
    let session_token=localStorage.getItem('token')
    return (
        <Route 
        {...rest}
        render={props => {
            if(session_token !== null){
                return <Component />
            }else{
                return (
                <Redirect to={{ pathname: "/", state: { from:props.location } }}/>
                );
            };
        }
    }
        />
    )
}

export default ProtectectedRoutes
