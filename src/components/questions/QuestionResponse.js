import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getSelectedQuestion, submitQuestionResponse } from '../../actions'
import history from '../../history'


class QuestionResponse extends React.Component {
    constructor(props) {
      super(props);

      this.state = {optionSelected: ''};
  }

  componentDidMount() {
    this.props.getSelectedQuestion(this.props.currentQuestion)
  }

  renderLabelText(option) {
    if (option === 'optionOne') {
      return this.props.currentQuestion.optionOne.text
    }

    if (option === 'optionTwo') {
      return this.props.currentQuestion.optionTwo.text
    }

  }
    
  renderInput = ({ input, label }) => {  

    return (
          <div className="grouped fields">
            <div className="ui radio checkbox">
              <input type="radio"  {...input} />
              <label>{label}</label>
            </div>
          </div>
    );
  }

  onSubmit = formValues => {

    if (!this.state.optionSelected) {
      alert('Please select an option')
      return
    }
    this.props.submitQuestionResponse(formValues)
  }

  handleOnChange = event => {
    this.setState({optionSelected: event.target.value })
  }
  

  render() {    
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
        <label>Would you rather?</label><p />
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

  return {
    questions: state.questions,
    currentQuestion: state.questions[ownProps.match.params.id],
    selectedQuestion: state.selectedQuestion
  }
};

const formWrapped = reduxForm({
  form: 'questionResponse'
})(QuestionResponse);

export default connect(mapStateToProps, { getSelectedQuestion, submitQuestionResponse } )(formWrapped)