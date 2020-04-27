import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Footer />
    </div>
  );
}

export default App;
