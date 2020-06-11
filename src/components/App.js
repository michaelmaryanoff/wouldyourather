import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse';
import QuestionResult from './questions/QuestionResult';
import history from '../history';
import _ from 'lodash';

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';

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
              {this.redirectUser(<HomePage />)}
            </Route>
            <Route path="/questions/new" exact>
              {this.redirectUser(<QuestionCreate />)}
            </Route>
            <Route
              path="/leaderboard"
              exact
              render={props => {
                console.log('these are the props', props);

                return !_.isEmpty(this.props.currentUser) ? (
                  <LeaderBoard {...props} />
                ) : (
                  <Redirect
                    to={{ pathname: '/', state: { from: props.location.pathname } }}
                  />
                );
              }}
            />

            <Route path="/" exact component={Login} />
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
  return {
    currentUser: state.users.authedUser
  };
};

export default connect(mapStateToProps, {})(App);
