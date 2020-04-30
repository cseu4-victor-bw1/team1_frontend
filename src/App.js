import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register"
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";
import Controls from "./components/controls";
import { AppContainer, MainContainer, RoutersContainer } from "./assets/styles/appStyling";
import axios from "axios"

function App() {

  const history = useHistory()

  const [token, setToken] = useState(null)

  const [title, setTitle] = useState(null)

  const [text, setText] = useState(null)

  const [user, setUser] = useState(null)

  const axiosWithAuth = (method, url, data) => {
    return axios({
      method: method,
      url: url,
      data: data,
      headers: {
        "Authorization": token,
        "Access-Control-Allow-Origin": ""
      }
    })
  }

  // NEEDS FIXING
  useEffect(() => {
    if (history.location === "/login") {
      setTitle("Welcome Back Warrior")
      setText('You have return ... This one is braver than I thought. Login in to meet your fate!')
    } else if (history.location === "/dashboard") {
      setTitle("We begin ...")
      setText("... but will you survive")
    } else {
      setTitle("Welcome Barbarian!")
      setText(`You are new to these parts. Do you dare sign your life away to the Maze of Terror? Use the registation form to accept the challenge.`)
    }
  }, [])


  return (
    <AppContainer>
      <MainContainer className="App">
        <Nav />
        <RoutersContainer>
          <Route exact path="/" render={(props) =>
            <Register setToken={setToken} setUser={setUser} axiosWithAuth={axiosWithAuth} setText={setText} setTitle={setTitle} />
          } />
          <Route exact path="/login" render={(props) =>
            <Login setToken={setToken} setUser={setUser} axiosWithAuth={axiosWithAuth} setText={setText} setTitle={setTitle} />
          } />
          <Route exact path="/dashboard" render={(props) =>
            <Dashboard user={user} />
          } />
        </RoutersContainer>
        <Controls text={text} title={title} axiosWithAuth={axiosWithAuth} />
      </MainContainer>
    </AppContainer>
  );
}

export default App;

