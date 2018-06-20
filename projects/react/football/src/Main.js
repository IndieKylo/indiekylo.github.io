import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="scores">
                <div className="score-box">
                  <div className="score-details">March 19</div>
                  <div className="score-home score-loser">
                    <div className="score-team">SEA</div>
                    <div className="score-team score-loser">MIN</div>
                  </div>
                </div>
            </div>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Team</NavLink></li>
              <li><NavLink to="/contact">League</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;