import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Home from "./Home";
import Contact from "./ContactComponent";
import { Route, Routes, useNavigate } from "react-router-dom";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const AboutUsPage = () => {
      return <About leaders={this.state.leaders} />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.id === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route
            exact
            path="/menu"
            Component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" Component={DishWithId} />
          <Route exact path="/contactUs" Component={Contact} />
          <Route exact path="/aboutus" Component={AboutUsPage} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
