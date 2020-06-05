import React from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";

class QuestionResult extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderChoices() {
    const { optionOne, optionTwo } = this.props.selectedQuestion;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    // Get question from questions array at index of selected question
    console.log(
      "QuestionResult -> renderChoices -> this.props.questions",
      this.props.questions
    );
    console.log(
      "QuestionResult -> renderChoices -> this.props.question[this.props.currentQuestion.id]",
      this.props.selectedQuestion.id
    );
    console.log(
      "question for interpelation",
      this.props.questions[this.props.selectedQuestion.id]
    );

    // Log that question

    // Log the number of votes

    // Assign the number of new votes to the variable

    // Populate UI with this

    return (
      <div>
        <div className="item">
          <div className="Header">
            {this.props.selectedQuestion.optionOne.text}
            <div className="content">
              {optionOne.votes.length} out of {totalVotes} users chose this option.
            </div>
          </div>
        </div>
        <div className="item">
          <div className="Header">
            {this.props.selectedQuestion.optionTwo.text}
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
    console.log("this.props.questions in render", this.props.questions);
    console.log("this.props.currentQuestion", this.props.currentQuestion);

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
