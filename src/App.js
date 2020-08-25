import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Sales from "./Sales";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App-container">
        <nav className="bg-warning">
          <h1 className="text-danger ">Rizwan</h1>

          <ul className="nav-item d-flex justify-content-end">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/sales">
              sales
            </Link>
            <Link className="nav-link" to="/search">
              search
            </Link>
            <Link className="nav-link" to="/about">
              about us
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/home/:userId" component={Home} />
          <Route path="/sales" component={Sales} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
