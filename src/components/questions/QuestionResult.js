import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions';
import ErrorPage from '../auth/ErrorPage';
import _ from 'lodash';

class QuestionResult extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderChoices() {
    console.log('props', this.props);

    const { optionOne, optionTwo } = this.props.questions.questionList[
      this.props.questionId
    ];
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    let optionOnePercentage = 0;
    let optionTwoPercentage = 0;

    optionOnePercentage = Math.floor((optionOne.votes.length / totalVotes) * 100);
    optionTwoPercentage = Math.floor((optionTwo.votes.length / totalVotes) * 100);

    let optionOneFontWeight =
      this.props.chosenResponse === 'optionOne' ? 'bold' : 'normal';
    let optionTwoFontWeight =
      this.props.chosenResponse === 'optionTwo' ? 'bold' : 'normal';

    return (
      <div>
        <div className="item">
          <div className="header" style={{ fontWeight: `${optionOneFontWeight}` }}>
            {optionOne.text}
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
            {optionTwo.text}
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
    if (this.props.questionNotFound) {
      return <ErrorPage />;
    }
    return <div className="ui relaxed divided list">{this.renderResults()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('own props', ownProps);
  if (_.isEmpty(state.questions.selectedQuestion)) {
    console.log('could not find a selected questions');
    return { questionNotFound: true };
  }

  return {
    questions: state.questions,
    chosenResponse: state.questions.answer
  };
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionResult);
