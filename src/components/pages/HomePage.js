import React from 'react';
import { fetchQuestions, fetchUsers } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions()
    }

    renderUnansweredList() {
        return this.props.questions.map(question => {
            return (
                <div className="item" key={question.id}>
                    <div className="content">
                        <div className="header">{`${question.author} asks:`}</div>
                            <div >
                                {question.optionOne.text}
                                <br />OR
                                <br />
                                {question.optionTwo.text}
                            </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Questions</h1>
                <div className="ui celled list">
                    {this.renderUnansweredList()}
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    // Sets our current user state
    return {
        questions: Object.values(state.questions),
        users: Object.values(state.users)
    }
}

export default connect(mapStateToProps, { fetchQuestions, fetchUsers })(HomePage);