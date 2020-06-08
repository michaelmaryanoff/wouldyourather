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
  redirectUser = () => {
    return _.isEmpty(this.props.currentUser) ? <Redirect to="/" /> : <HomePage />;
  };

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/home" exact component={HomePage}>
              {this.redirectUser()}
            </Route>
            <Route path="/questions/new" exact component={QuestionCreate}>
              {this.redirectUser()}
            </Route>
            <Route path="/leaderboard" exact component={LeaderBoard}>
              {this.redirectUser()}
            </Route>
            <Route path="/" exact component={Login} />
            <Route path="/questions/response/:id" exact component={QuestionResponse}>
              {this.redirectUser()}
            </Route>
            <Route path="/questions/result/:id" exact component={QuestionResult}>
              {this.redirectUser()}
            </Route>
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
