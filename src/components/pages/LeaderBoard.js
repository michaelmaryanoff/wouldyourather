import React from "react";
import { fetchUsersAndQuestions } from "../../actions";
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
  componentDidMount() {
    this.props.fetchUsersAndQuestions();
  }
  render() {
    console.log("questions in render", this.props.questions);

    return <div>LeaderBoard</div>;
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions)
  };
};

export default connect(mapStateToProps, { fetchUsersAndQuestions })(LeaderBoard);
