import React from 'react';
import { fetchQuestions, fetchUsers, fetchUsersAndQuestions } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchUsersAndQuestions()
    }
    componentDidUpdate() {
        console.log('users array', this.props.users);   
    }

    renderUserName(post) {
        return this.props.users.filter(user => user.id === post)
    }

    renderUnansweredList() {
        return this.props.questions.map(question => {
            const userName = this.renderUserName(question.author)[0].name

            return (
                <div className="item" key={question.id}>
                    <div className="content">
                        <div className="header">{`${userName} asks:`}</div>
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

export default connect(mapStateToProps, { fetchQuestions, fetchUsers, fetchUsersAndQuestions })(HomePage);