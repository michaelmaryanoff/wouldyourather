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
    const optionOnePercentage = Math.floor(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercentage = Math.floor(
      (optionTwo.votes.length / totalVotes) * 100
    );

    let optionOneFontWeight =
      this.props.chosenResponse === 'optionOne' ? 'bold' : 'normal';
    let optionTwoFontWeight =
      this.props.chosenResponse === 'optionTwo' ? 'bold' : 'normal';

    return (
      <div>
        <div className="item">
          <div className="header" style={{ fontWeight: `${optionOneFontWeight}` }}>
            {this.props.questions.selectedQuestion.optionOne.text}
            <div
              className="content"
              style={{ fontWeight: `${optionOneFontWeight}` }}
            >
              {optionOne.votes.length} out of {totalVotes} users chose this option. (
              {optionOnePercentage}%)
            </div>
          </div>
        </div>
        <div className="item">
          <div className="header" style={{ fontWeight: `${optionTwoFontWeight}` }}>
            {this.props.questions.selectedQuestion.optionTwo.text}
            <div
              className="content"
              style={{ fontWeight: `${optionTwoFontWeight}` }}
            >
              {optionTwo.votes.length} out of {totalVotes} users chose this option. (
              {optionTwoPercentage}%)
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
    chosenResponse: state.questions.answer
  };
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionResult);
