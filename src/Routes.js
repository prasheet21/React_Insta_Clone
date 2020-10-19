import React from 'react' ;
import {Redirect, Route, Switch } from 'react-router-dom' ;
import Signup from './component/SignupForm' ;

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'/>
            <Route exact path='/account/signup' component={Signup}/>
        </Switch>
    ) ;
}

export default Routes ;