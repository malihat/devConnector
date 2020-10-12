import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// If authenticated the user will see the component else it will redirect to login page
const PrivateRoute = ({ component: Component, auth: {isAuthenticated, loading }, ...rest } ) => (
  <Route {...rest} render={props => !isAuthenticated && !loading ? 
    (<Redirect to='/login' />) : (<Component {...props}/>)  } /> 
)


PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
 
export default connect(mapStateToProps)(PrivateRoute);