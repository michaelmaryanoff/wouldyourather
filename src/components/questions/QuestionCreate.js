import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addQuestion } from '../../actions';

class QuestionCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ label, input, meta }) => {
    // formProps is automatically created with the component attribute
    // Label is being passed through as a prop to our form component
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // FormValues is used instead of the event object because we no longer care about the event object
    // We have all that stuff taken care of by Redux Form
    this.props.addQuestion(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          Would you rather? <p />
          <Field name="optionOne" component={this.renderInput} label="Option One" />
          <Field name="optionTwo" component={this.renderInput} label="Option Two" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  // This will just validate our values using the validade function that comes with redux
  const errors = {};

  if (!formValues.optionOne) {
    errors.optionOne = 'You must enter a first option';
  }

  if (!formValues.optionTwo) {
    errors.optionTwo = 'You must enter a second option';
  }

  return errors;
};

// The reason that these look so convoluted is because the connect function was already occupied by our form
const formWrapped = reduxForm({
  // Redux form stores you info with this key in your store
  form: 'questionCreate',
  validate: validate
})(QuestionCreate);

export default connect(null, { addQuestion })(formWrapped);
