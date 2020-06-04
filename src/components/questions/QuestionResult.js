import React from 'react'
import { connect } from 'react-redux';

class QuestionResult extends React.Component {
    componentDidMount(){
        console.log('selected question in QuestionResult', this.props.selectedQuestion)
    }
    renderResults() {
        return (
            <div>
                <div className="item">
                    <div className="Header">
                        questionOne
                    </div>
                </div>
                <div className="item">
                    <div className="Header">
                        questionTwo
                    </div>
                </div>
            </div>
        )
 
    }
    render () {
        console.log(this.props.selectedQuestion)
        return (
                <div className="ui relaxed divided list">
                    {this.renderResults()}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('current state', state);
    
    return {
        questions: state.questions,
        selectedQuestion: state.selectedQuestion
    }
}

export default connect(mapStateToProps)(QuestionResult);