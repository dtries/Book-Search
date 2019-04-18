import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/books" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          <Route component={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;