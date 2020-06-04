import React from 'react';
import { Router, Route } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse'
import QuestionResult from './questions/QuestionResult'
import history from '../history'

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';

import Header from './Header';

const App = () => {
    // TODO: Create a protected route to ensure you can't click on header when authenticated

    return (
        <div className="ui container">
            <Router history={history}>
            <div>
                <Header />
                <Route path="/home" exact component={HomePage} />
                <Route path="/questions/new" exact component={QuestionCreate} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/" exact component={Login} />
                <Route path="/questions/response/:id" exact component={QuestionResponse} />
                <Route path="/questions/result/temp" exact component={QuestionResult} />
            </div>
            </Router>
            
        </div>
        
    )
}

export default App;