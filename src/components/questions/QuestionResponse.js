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
    console.log('users', this.props.users);
    const tempSelectedQuestion = this.props.selectedQuestion.author;
    const tempUsers = this.props.users;
    const tempSelectedUserInfo = tempUsers.filter(
      user => user.id === tempSelectedQuestion
    )[0];
    console.log('tempselectedquestions', tempSelectedQuestion);
    console.log('tempusers', tempUsers);
    console.log(' tempSelectedUserInfo', tempSelectedUserInfo);
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

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <label>Would you rather?</label>
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

const mapStateToProps = state => {
  return {
    questions: Object.values(state.questions),
    users: Object.values(state.users.userList),
    currentQuestion:
      state.questions.questionList[state.questions.selectedQuestion.id],
    selectedQuestion: state.questions.selectedQuestion,
    currentUser: state.currentUser
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
