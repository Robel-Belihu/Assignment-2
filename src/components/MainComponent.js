import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./Home";
import { Route, Routes, useNavigate } from "react-router-dom";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const Home = () => {
      return <h1 style={{ backgroundColor: "red" }}>Hey HOMmey?</h1>;
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            exact
            path="/menu"
            Component={() => <Menu dishes={this.state.dishes} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}
