import React from 'react'

class QuestionResult extends React.Component {
    
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
        return (
            
                <div className="ui relaxed divided list">
                    {this.renderResults()}
                </div>
            
            
        )
    }
}

export default QuestionResult;