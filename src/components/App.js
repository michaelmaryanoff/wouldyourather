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
            <Route path="/home" exact>
              {<HomePage />}
            </Route>
            <Route path="/questions/new" exact>
              {this.redirectUser(<QuestionCreate />)}
            </Route>
            <SecureRoute
              path="/leaderboard"
              exact
              component={LeaderBoard}
              authedUser={this.props.authedUser}
            />

            <Route path="/" exact component={LoginDropdown} />
            <Route path="/questions/response/:id" exact>
              {this.redirectUser(<QuestionResponse />)}
            </Route>
            <Route path="/questions/result/:id" exact>
              {this.redirectUser(<QuestionResult />)}
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // Sets our current user state
  console.log('state in app', state);

  return {
    authedUser: state.users.authedUser
  };
};

export default connect(mapStateToProps, {})(App);
