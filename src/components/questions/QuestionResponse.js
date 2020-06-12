import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getSelectedQuestion,
  submitQuestionResponse,
  fetchUsersAndQuestions
} from '../../actions';
import _ from 'lodash';

class QuestionResponse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { optionSelected: '', id: '' };
  }

  componentDidMount() {
    this.props.fetchUsersAndQuestions();
  }

  renderLabelText = option => {
    if (option === 'optionOne') {
      return this.props.currentQuestion.optionOne.text;
    }

    if (option === 'optionTwo') {
      return this.props.currentQuestion.optionTwo.text;
    }
  };

  renderInput = ({ input, label }) => {
    return (
      <div className="grouped fields">
        <div className="ui radio checkbox">
          <input type="radio" {...input} />
          <label>{label}</label>
        </div>
      </div>
    );
  };

  onSubmit = formValues => {
    if (!this.state.optionSelected) {
      alert('Please select an option');
      return;
    }
    this.props.submitQuestionResponse(formValues);
  };

  handleOnChange = event => {
    this.setState({ optionSelected: event.target.value });
  };

  renderTitle() {
    if (!this.props.currentQuestionAttributes) {
      console.log('we have attributes in renderTitle');
    }
    const { avatarURL, name } = this.props.currentQuestionAttributes;
    const fullURL = require(`../../api${avatarURL}`);

    return (
      <div>
        <img src={fullURL} className="ui avatar image" alt={name} />
        {name} asks:
      </div>
    );
  }

  render() {
    console.log('this.props', this.props);

    return (
      <div>
        {this.renderTitle()}
        <label>Would you rather?</label>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <p />
          <Field
            name="selection"
            component={this.renderInput}
            type="radio"
            label={this.renderLabelText('optionOne')}
            value="optionOne"
            onChange={this.handleOnChange}
          />
          <Field
            name="selection"
            component={this.renderInput}
            type="radio"
            label={this.renderLabelText('optionTwo')}
            value="optionTwo"
            onChange={this.handleOnChange}
          />
          <button className="ui button primary">Submit Answer</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // Maybe write here a return statement that depends on our currentquestionattributes
  // console.log('state in msp', state.questions.selectedQuestion);
  console.log('props in msp', ownProps.questionId);

  if (_.isEmpty(state.questions.selectedQuestion)) {
    return {
      questions: Object.values(state.questions),
      users: Object.values(state.users.userList),
      currentQuestion: state.questions.questionList[ownProps.questionId],
      selectedQuestion: state.questions.questionList[ownProps.questionId],
      currentQuestionAttributes: Object.values(state.users.userList).filter(
        user => user.id === state.questions.questionList[ownProps.questionId].author
      )[0]
    };
  }
  return {
    questions: Object.values(state.questions),
    users: Object.values(state.users.userList),
    // We need to get rid of this dependencey on the id of the selected question
    currentQuestion:
      state.questions.questionList[state.questions.selectedQuestion.id],

    // We need to create a selected question using this.props.questionId only
    //* Maybe we can do this by querying the questionlist
    selectedQuestion: state.questions.selectedQuestion,

    // We need to get this out of the new created question
    currentQuestionAttributes: Object.values(state.users.userList).filter(
      user => user.id === state.questions.selectedQuestion.author
    )[0]
  };
};

const formWrapped = reduxForm({
  form: 'questionResponse'
})(QuestionResponse);

export default connect(mapStateToProps, {
  getSelectedQuestion,
  submitQuestionResponse,
  fetchUsersAndQuestions
})(withRouter(formWrapped));
