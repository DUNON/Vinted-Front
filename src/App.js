import './App.css';
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Cookies from "js-cookie"
import Header from './Components/Header';
import Home from "./Pages/Home"
import Offer from './Pages/Offer';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Publish from './Pages/Publish';
import Payment from './Pages/Payment'

library.add(faSearch, faEye);

function App() {
  // Tout ce qui concerne l'authentification se passe ds le app.js
  const [token, setToken] = useState(Cookies.get("token") || ""); //cela permet à notre utilisateur de pas avoir à se LogIn a chaque visite du site
  const [search, SetSearch] = useState("");
  const [togglePrice, setTogglePrice] = useState(false);
  const [rangeValue, setRangeValue] = useState([0, 1000]);
  const [finalRangeValues, setFinalRangeValues] = useState([0, 10000]);

  const handleSearch = (event) => {
    SetSearch(event.target.value);
  };
  const handleTogglePrice = () => {
    const toggle = !togglePrice;
    setTogglePrice(!toggle);
    console.log(togglePrice);
  };

  const handleRange = (values) => {
    setRangeValue(values);
  };
  const handleFinalRange = (values) => {
    setFinalRangeValues(values);
  };
  const setUser = (token) => {
    if (token) {
      // cree un cookie
      Cookies.set("token", token);
      setToken(token);
    } else {
      //supprime le cookie
      Cookies.remove("token");
      setToken("");
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          setUser={setUser}
          search={search}
          handleSearch={handleSearch}
          rangeValue={rangeValue}
          handleRange={handleRange}
          finalRangeValues={finalRangeValues}
          handleFinalRange={handleFinalRange}
          togglePrice={togglePrice}
          handleTogglePrice={handleTogglePrice}
          setTogglePrice={setTogglePrice}
        />
        <Switch>
          <Route exact path="/">
            <Home
              search={search}
              rangeValue={rangeValue}
              finalRangeValues={finalRangeValues}
            />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/publish">
            {token ? <Publish /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/payment">
            {token ? <Payment /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
