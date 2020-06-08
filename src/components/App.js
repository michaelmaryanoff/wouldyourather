import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import QuestionCreate from "./questions/QuestionCreate";
import QuestionResponse from "./questions/QuestionResponse";
import QuestionResult from "./questions/QuestionResult";
import history from "../history";
import _ from "lodash";

import HomePage from "./pages/HomePage";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";

import Header from "./Header";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {}

  checkUser() {
    let userBool = true;

    if (_.isEmpty(this.props.currentUser)) {
      console.log("is empty");

      userBool = false;
    } else {
      console.log("not empty");

      userBool = true;
    }
    console.log("user bool in function", userBool);

    return userBool;
  }

  redirectUser() {}

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/home" exact component={HomePage}>
              {_.isEmpty(this.props.currentUser) ? (
                <Redirect to="/" />
              ) : (
                <HomePage />
              )}
            </Route>
            <Route path="/questions/new" exact component={QuestionCreate}></Route>
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/" exact component={Login} />
            <Route
              path="/questions/response/:id"
              exact
              component={QuestionResponse}
            />
            <Route path="/questions/result/:id" exact component={QuestionResult} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // Sets our current user state
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, {})(App);
