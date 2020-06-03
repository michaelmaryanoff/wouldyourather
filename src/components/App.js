import React from 'react';
import { Router, Route } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse'
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
                <Route path="/temp" exact component={QuestionResponse} />
            </div>
            </Router>
            
        </div>
        
    )
}

export default App;