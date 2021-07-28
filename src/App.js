import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { useState } from 'react';
import Cookies from "js-cookie"
import Header from './Components/Header';
import Home from "./Pages/Home"
import Offer from './Pages/Offer';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';



function App() {
// Tout ce qui concerne l'authentification se passe ds le app.js
const [token,setToken]=useState()

const setUser = (token)=>{
  if (token) {
    // cree un cookie
    Cookies.set("token",token)
    setToken(token)
  } else {
    //supprime le cookie
    Cookies.remove("token")
    setToken("")
  }
}

  return (
  <div className="App">
    <Router>
      <Header token={token} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/offer/:id">
          <Offer/>
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser}/>
        </Route>
        <Route path="/login">
          <Login setUser={setUser}/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
