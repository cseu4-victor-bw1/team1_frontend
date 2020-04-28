import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register"
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Controls from "./components/controls";
import { MainContainer, RoutersContainer } from "./assets/styles/appStyling"

function App() {

  return (
    <MainContainer className="App">
      <Nav />
      <RoutersContainer>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Register} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </RoutersContainer>
      <Controls />
      <Footer />
    </MainContainer>
  );
}

export default App;
