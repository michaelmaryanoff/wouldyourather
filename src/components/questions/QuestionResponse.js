import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class QuestionResponse extends React.Component {
    constructor(props) {
      super(props);

      this.state = {optionSelected: ''};
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
    console.log('submission values onSubmit', formValues);
  }

  handleOnChange = event => {
    this.setState({optionSelected: event.target.value })
  }
  

  render() {
    console.log(this.props.questions);
    
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

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
};

const formWrapped = reduxForm({
  form: 'questionResponse'
})(QuestionResponse);

export default connect(mapStateToProps, {  })(formWrapped)