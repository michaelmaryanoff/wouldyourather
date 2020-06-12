import React, { Fragment } from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse';
import QuestionResult from './questions/QuestionResult';
import history from '../history';

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import SecureRoute from './auth/SecureRoute';
import LoginDropdown from './auth/LoginDropdown';
import ErrorPage from './auth/ErrorPage';

import Header from './Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Fragment>
            <div>
              <Header />
              <Switch>
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
                  component={component => (
                    <QuestionResponse questionId={component.match.params.id} />
                  )}
                  authedUser={this.props.authedUser}
                />
                <SecureRoute
                  path="/questions/result/:id"
                  exact
                  component={component => (
                    <QuestionResult questionId={component.match.params.id} />
                  )}
                  authedUser={this.props.authedUser}
                />
                <Route path="/" exact component={LoginDropdown} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </Fragment>
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
