import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Header from './Components/Header';
import Home from "./Components/Home"
import Offer from './Components/Offer';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/offer/:id">
          <Offer/>
        </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
