import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions';

class QuestionResult extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderChoices() {
    const { optionOne, optionTwo } = this.props.questions.questionList[
      this.props.questions.selectedQuestion.id
    ];
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    return (
      <div>
        <div className="item">
          <div className="Header">
            {this.props.questions.selectedQuestion.optionOne.text}
            <div className="content">
              {optionOne.votes.length} out of {totalVotes} users chose this option.
            </div>
          </div>
        </div>
        <div className="item">
          <div className="Header">
            {this.props.questions.selectedQuestion.optionTwo.text}
            <div className="content">
              {optionTwo.votes.length} out of {totalVotes} users chose this option.
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderResults() {
    return <div>{this.renderChoices()}</div>;
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderResults()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    selectedQuestion: state.selectedQuestion
  };
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionResult);
