import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/auth/Logout";
import { connect } from "react-redux";
import _ from "lodash";

class Header extends React.Component {
  renderCurrentuser() {
    if (_.isEmpty(this.props.currentUser)) {
      console.log("no user");
    } else {
      console.log("there is a user");
    }
    return <div>Current user</div>;
  }

  render() {
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
          <div className="item">{this.renderCurrentuser()}</div>
          <Logout />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Header);
