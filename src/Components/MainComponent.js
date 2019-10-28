import React, { Component } from "react";
import Header from "./header";
import Home from "./home";
import Work from "./work";
import About from "./about";
import { Route, Switch, Redirect } from "react-router-dom";

class MainComponent extends Component {
  render() {
    const homePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/home" component={homePage}></Route>
            <Route exact path="/work" component={() => <Work />}></Route>
            <Route exact path="/about" component={() => <About />}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainComponent;
