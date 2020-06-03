import React from 'react';
import { Field, reduxForm } from 'redux-form';

class QuestionCreate extends React.Component {
    renderInput(formProps) {
        // formProps is automatically created with the component attribute
        // This can be destructured but we are not for now
        // Label is being passed through as a prop to our form component
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input}/>
            </div>
            
        )
    }
    render() {
        return (
            <form className="ui form">
                <Field name="optionOne" component={this.renderInput} label="Option One" />
                <Field name="optionTwo" component={this.renderInput} label="Option Two"/>
            </form>
        )
    }
}

export default reduxForm({
    // Redux form stores you info with this key in your store
    form: 'questionCreate'
})(QuestionCreate);