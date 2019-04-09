import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
require("dotenv").config();
console.log(`${process.env.REACT_APP_google_API}`);

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          <Route exact path="/books/:id" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
