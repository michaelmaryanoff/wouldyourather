import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';
import QuestionResponse from './questions/QuestionResponse';
import QuestionResult from './questions/QuestionResult';

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';


const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/questions/new" exact component={QuestionCreate} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
        
    )
}

export default App;