import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignupForm from './component/SignupForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
// import Routes from './Routes'

const App = () => {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/signup" component={SignupForm} />
        <Route exact path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;