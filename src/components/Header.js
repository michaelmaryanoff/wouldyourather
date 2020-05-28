import React from 'react'
import { Link } from 'react-router-dom';
import Logout from '../components/auth/Logout'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/home" className="item">
                Home
            </Link>
            <Link to="/questions/new" className="item">
                New Question
            </Link>
            <Link to="/leaderboard" className="item">
                Leaderboard
            </Link>
            <div className="right menu">
                <Logout />
            </div>
        </div>
    );
}

export default Header;