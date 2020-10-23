import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupForm from './component/Home/SignupForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tagged from './component/Profile/Tagged'
import Posts from './component/Profile/Posts'
import Saved from './component/Profile/Saved'

// import Routes from './Routes'

const App = () => {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/signup" component={SignupForm} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/profile/posts' component={Posts}/>
        <Route exact path='/profile/tagged' component={Tagged}/>
        <Route exact path='/profile/saved' component={Saved}/>
      </BrowserRouter>
    </div>
  );
}

export default App;