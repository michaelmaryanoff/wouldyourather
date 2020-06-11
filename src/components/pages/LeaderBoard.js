import React from 'react';
import { fetchUsersAndQuestions } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';

class LeaderBoard extends React.Component {
  componentDidMount() {
    this.props.fetchUsersAndQuestions();
  }

  compareScores = (a, b) => {
    return;
  };

  renderLeaderList() {
    let newUserList = Object.values(this.props.users);

    let mappedUserList = newUserList.map(user => {
      let totalScore = user.questions.length + _.size(user.answers);

      user.totalScore = totalScore;
      return user;
    });

    mappedUserList.sort((a, b) => b.totalScore - a.totalScore);

    return mappedUserList.map(user => {
      const { questions, answers, name, id, avatarURL } = user;
      const totalScore = user.questions.length + _.size(user.answers);
      const avatarURLFull = require(`../../api${avatarURL}`);

      return (
        <div className="item" key={id}>
          <div className="right floated content">Total score = {totalScore}</div>
          <div className="content">
            <img className="ui avatar image" alt="temp" src={avatarURLFull} />
            <div className="header">{name}</div>
            <div className="description">
              Answered Questions = {_.size(answers)}
              <br /> Created questions = {questions.length}
              <br />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log('props', this.props);

    return <div className="ui celled list">{this.renderLeaderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions.questionList),
    users: Object.values(state.users.userList)
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchUsersAndQuestions })(LeaderBoard)
);
