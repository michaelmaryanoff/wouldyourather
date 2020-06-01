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

    queryUserAttributes(post) {
        return this.props.users.filter(user => user.id === post)
    }

    renderUnansweredList() {
        return this.props.questions.map(question => {
            //TODO: This could be destructed
            const userName = this.queryUserAttributes(question.author)[0].name
            const avatarURLStub = this.queryUserAttributes(question.author)[0].avatarURL
            const avatarURLFull = require(`${avatarURLStub}`)
            console.log('url stub', avatarURLStub);
            
            
            return (
                <div className="item" key={question.id}>
                    <div className="content">
                        <img className="ui avatar image" alt="hey" src={avatarURLFull} />
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