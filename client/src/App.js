import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/books/:id" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
