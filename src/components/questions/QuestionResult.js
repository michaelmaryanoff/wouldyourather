import React from 'react'
import { connect } from 'react-redux';

class QuestionResult extends React.Component {
    renderChoices() {
        const { optionOne, optionTwo} = this.props.selectedQuestion
        const totalVotes = optionOne.votes.length + optionTwo.votes.length
        
        return (
            <div>
                <div className="item">
                    <div className="Header">
                        {this.props.selectedQuestion.optionOne.text}
                    <div className="content">
                        {optionOne.votes.length} out of {totalVotes} users chose this option.
                    </div>
                        
                    </div>
                </div>
                <div className="item">
                    <div className="Header">
                        {this.props.selectedQuestion.optionTwo.text}
                        <div className="content">
                            {optionTwo.votes.length} out of {totalVotes} users chose this option.
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    renderResults() {
        return (
            <div>
                {this.renderChoices()}
            </div>
        )
 
    }
    render () {
        return (
                <div className="ui relaxed divided list">
                    {this.renderResults()}
                </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        questions: state.questions,
        selectedQuestion: state.selectedQuestion
    }
}

export default connect(mapStateToProps)(QuestionResult);