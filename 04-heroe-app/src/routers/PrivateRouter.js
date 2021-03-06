
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRouter = ({ 
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    console.log(rest);
    localStorage.setItem('lastPath',rest.location.pathname)
    return (
        <Route {...rest}
            component={ (props)=>(
                (isAuthenticated)
                    ?(<Component {...props} />)
                    : ( <Redirect to="/login" />)
            )}
        />
    )
}

PrivateRouter.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}