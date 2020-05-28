import React from 'react';
import { signIn } from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import QuestionCreate from './questions/QuestionCreate';

import HomePage from './pages/HomePage';
import LeaderBoard from './pages/LeaderBoard';
import Login from './pages/Login';

import Header from './Header';


const App = () => {
    return (
        <div className="ui container">
            
            <BrowserRouter>
            <div>
                <Header />
                <Route path="/home" exact component={HomePage} />
                <Route path="/questions/new" exact component={QuestionCreate} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/" exact component={Login} />
            </div>
            </BrowserRouter>
            
        </div>
        
    )
}

export default App;