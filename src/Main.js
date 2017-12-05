import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import home from "./Home";
import stuff from "./Stuff";
import contact from "./Contact";

class main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={home}/>
            <Route path="/stuff" component={stuff}/>
            <Route path="/contact" component={contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default main;
