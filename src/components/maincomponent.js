import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./menucomponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {LEADERS} from '../shared/leaders'
import {DISHES} from '../shared/dishes'
import "../App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Aboutus from "./AboutComponent";
import { connect } from "react-redux";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchPromos,
  fetchLeaders,
  postFeedback,
} from "../redux/actionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  },
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) => {
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    );
  },
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
});

class Main extends Component {
  constructor() {
    super();
  }
  item = {
    image:
      "https://images.unsplash.com/photo-1479832912902-77089f02b1d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBsYXRlJTIwb2YlMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Pasta",
    description: "Delicious Pasta Plate",
    designation: "Hot",
  };
  dessert = {
    image:
      "https://images.unsplash.com/photo-1512684609856-01f6e503a294?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoZWVzZSUyMGNha2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Dessert",
    description: "Cheese Cake",
    designation: "Hot",
  };
  coffee = {
    image:
      "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "Coffee",
    description: "Cup of Coffee",
    designation: "Hot",
  };
  render() {
    const HomePage = () => {
      return <Home item={this.item} dessert={this.dessert} coffee={this.coffee} />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            DISHES.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          postComment={this.props.postComment}
          commentsErrMess={this.props.promotions.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={DISHES} />}
              />
              <Route path="/menu/:dishId">{DishWithId}</Route>
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
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
