import React from "react";
import { Field, reduxForm } from "redux-form";

class QuestionResponse extends React.Component {
    constructor(props) {
      super(props);

      this.state = {optionSelected: ''};
  }
    
  renderInput = ({ input, label }) => {  
    
    
    return (
      <div className="grouped fields">
        <div className="field">
            <label>{label}</label>
            <input type="radio" checked="checked" {...input} />
        </div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log('submission values', formValues);
  }

  handleOnChange = event => {
    console.log('event.target.value', event.target.value);
    
    this.setState({optionSelected: event.target.value })
  }
  

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
        <label>Would you rather?</label>
          <Field
            name="selection"
            component={this.renderInput}
            type="radio"
            label="First Option"
            value="optionOne"
            onChange={this.handleOnChange}
          />
          <Field
            name="selection"
            component={this.renderInput}
            type="radio"
            label="Second option"
            value="optionTwo"
            onChange={this.handleOnChange}
          />
          <button className="ui button primary">Submit Answer</button>
        </form>
      </div>
    );
  }
}

const validate = ({optionOne, optionTwo}) => {
  const errors = {}
  if (!optionOne || !optionTwo) {
    console.log('we cannot find a value!');
    
    errors.optionOne = 'Please select a response'
    errors.optionTwo = 'Please select a response'
    console.log(errors);
  }
  return errors
}

export default reduxForm({
  form: 'questionResponse',
  validate: validate
})(QuestionResponse);
