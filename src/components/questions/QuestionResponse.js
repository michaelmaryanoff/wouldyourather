import React from "react";
import { Field, reduxForm } from "redux-form";

class QuestionResponse extends React.Component {
    renderInput({input, label}) {
        return (
            <div className="grouped fields">
                <div className="field">
                    <div className="ui radio checkbox">
                        <label>{label}</label>
                        <input type="radio" {...input} />
                    </div>
                </div>
                
            </div>
        )
    }
  render() {
    return (
        <div className="ui form">
            <Field name="optionOne" component={this.renderInput} label="First Option" />
            <Field name="optionTwo" component={this.renderInput} label="Second option" />
        </div>
    )
  }
}

export default reduxForm({
    form: 'questionResponse'
})(QuestionResponse);
