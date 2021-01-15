import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./menucomponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { LEADERS } from "../shared/leaders";
import { DESSERTS, DISHES, PIZZA, SALADS } from "../shared/dishes";
import "../App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Aboutus from "./AboutComponent";
import { TransitionGroup } from "react-transition-group";

class Main extends Component {

  render() {
    const HomePage = () => {
      return <Home />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            DISHES.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={[]}
        />
      );
    };
    const pizzaWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            PIZZA.filter(
              (one) => one.id === parseInt(match.params.pizzaId, 10)
            )[0]
          }
          comments={[]}
        />
      );
    };

    const saladWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            SALADS.filter(
              (one) => one.id === parseInt(match.params.saladId, 10)
            )[0]
          }
          comments={[]}
        />
      );
    };

    const dessertWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            DESSERTS.filter(
              (one) => one.id === parseInt(match.params.dessertId, 10)
            )[0]
          }
          comments={[]}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => (
                <Menu
                  dishes={DISHES}
                  pizza={PIZZA}
                  salad={SALADS}
                  dessert={DESSERTS}
                />
              )}
            />

            <Route path="/menu/:dishId">{DishWithId}</Route>
            <Route path="/pizza/:pizzaId">{pizzaWithId}</Route>
            <Route path="/salad/:saladId">{saladWithId}</Route>
            <Route path="/dessert/:dessertId">{dessertWithId}</Route>
            <Route exact path="/contactus">
              <Contact
                resetFeedbackForm={this.props.resetFeedbackForm}
                postFeedback={this.props.postFeedback}
              />
            </Route>
            <Route path="/aboutus">
              <Aboutus leaders={LEADERS} />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </TransitionGroup>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
