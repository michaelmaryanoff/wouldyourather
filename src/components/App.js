import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse';
import QuestionResult from './questions/QuestionResult';
import history from '../history';
import _ from 'lodash';

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import SecureRoute from './auth/SecureRoute';
import Login from './pages/Login';
import LoginDropdown from './auth/LoginDropdown';

import Header from './Header';
import { connect } from 'react-redux';

class App extends React.Component {
  redirectUser = page => {
    return _.isEmpty(this.props.currentUser) ? (
      <Redirect to={{ pathname: '/' }} />
    ) : (
      page
    );
  };

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <SecureRoute
              path="/home"
              exact
              component={HomePage}
              authedUser={this.props.authedUser}
            />
            <SecureRoute
              path="/questions/new"
              exact
              component={QuestionCreate}
              authedUser={this.props.authedUser}
            />
            <SecureRoute
              path="/leaderboard"
              exact
              component={LeaderBoard}
              authedUser={this.props.authedUser}
            />
            <SecureRoute
              path="/questions/response/:id"
              exact
              component={QuestionResponse}
              authedUser={this.props.authedUser}
            />
            <SecureRoute
              path="/questions/result/:id"
              exact
              component={QuestionResult}
              authedUser={this.props.authedUser}
            />
            <Route path="/" exact component={LoginDropdown} />
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // Sets our current user state
  return {
    authedUser: state.users.authedUser
  };
};

export default connect(mapStateToProps, {})(App);
