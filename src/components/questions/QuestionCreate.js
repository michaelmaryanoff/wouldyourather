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
                <div>{formProps.meta.error}</div>
            </div>
            
        )
    }

    onSubmit(formValues) {
        // FormValues is used instead of the event object because we no longer care about the event object
        // We have all that stuff taken care of by Redux Form
        
        
    }

    render() {
        
        
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="optionOne" component={this.renderInput} label="Option One" />
                    <Field name="optionTwo" component={this.renderInput} label="Option Two"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    // This will just validate our values using the validade function that comes with redux 
    const errors = {};

    if(!formValues.optionOne) {
        errors.optionOne = 'You must enter a first option'
    }

    if(!formValues.optionTwo) {
        errors.optionTwo = 'You must enter a second option'
    }

    return errors;
};

export default reduxForm({
    // Redux form stores you info with this key in your store
    form: 'questionCreate',
    validate: validate
})(QuestionCreate);