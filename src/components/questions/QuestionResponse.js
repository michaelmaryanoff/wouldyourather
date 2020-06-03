import React from "react";
import { Field, reduxForm } from "redux-form";

class QuestionResponse extends React.Component {
  renderInput({ input, label }) {
      console.log(input);
      
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
    console.log(formValues);
  }

  render() {
      console.log(this.props);
      
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
        <label>Would you rather?</label>
          <Field
            name="optionOne"
            component={this.renderInput}
            type="radio"
            label="First Option"
            value="optionOne"
          />
          <Field
            name="optionTwo"
            component={this.renderInput}
            type="radio"
            label="Second option"
            value="optionTwo"
          />
          <button className="ui button primary">Submit Answer</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'questionResponse'
})(QuestionResponse);
