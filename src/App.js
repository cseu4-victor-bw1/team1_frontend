import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from "./components/login";
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
        <Route path="/" component={Login} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </RoutersContainer>
      <Controls />
      <Footer />
    </MainContainer>
  );
}

export default App;
