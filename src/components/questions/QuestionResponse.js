import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getSelectedQuestion,
  submitQuestionResponse,
  fetchUsersAndQuestions
} from '../../actions';

class QuestionResponse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { optionSelected: '', id: '' };
  }

  componentDidMount() {
    this.props.fetchUsersAndQuestions();
    this.props.getSelectedQuestion(this.props.currentQuestion);
  }

  renderLabelText = option => {
    if (option === 'optionOne') {
      return this.props.currentQuestion.optionOne.text;
    }

    if (option === 'optionTwo') {
      return this.props.currentQuestion.optionTwo.text;
    }
  };

  renderOptionOne = component => {
    console.log('component', component);

    return (
      <div className="grouped fields">
        <div className="ui radio checkbox">
          <input checked="true" type="radio" {...component.input} />
          <label>{component.label}</label>
        </div>
      </div>
    );
  };

  renderOptionTwo = component => {
    return (
      <div className="grouped fields">
        <div className="ui radio checkbox">
          <input checked="true" type="radio" {...component.input} />
          <label>{component.label}</label>
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
    console.log('event target', event.target.value);

    this.setState({ optionSelected: event.target.value });
  };

  render() {
    console.log('state is', this.state);
    console.log('form', this.props);

    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <label>Would you rather?</label>
          <div className="grouped fields"></div>
          <p />
          <Field
            name="selection"
            className="ui radio checkbox"
            component={this.renderOptionOne}
            type="radio"
            label={this.renderLabelText('optionOne')}
            value="optionOne"
            id="optionOne"
            onChange={event => {
              this.handleOnChange(event);
            }}
          />
          <Field
            name="selection"
            component={this.renderOptionTwo}
            className="ui radio checkbox"
            type="radio"
            label={this.renderLabelText('optionTwo')}
            value="optionTwo"
            id="optionTwo"
            onChange={event => {
              this.handleOnChange(event);
            }}
          />
          <button className="ui button primary">Submit Answer</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions),
    users: Object.values(state.users),
    currentQuestion:
      state.questions.questionList[state.questions.selectedQuestion.id],
    selectedQuestion: state.questions.selectedQuestion
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
