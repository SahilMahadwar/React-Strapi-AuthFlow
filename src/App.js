import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

//pages
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/signup" exact component={Signup} />
    </Router>
  );
}

export default App;
