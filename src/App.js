import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ProtectedRoute from './Auth/ProtectedRoute';

//pages
import Login from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';
import Test from './pages/test';

//pushh

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      <ProtectedRoute path="/test" exact component={Test} />
    </Router>
  );
}

export default App;
