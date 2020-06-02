import React from 'react';
import { fetchQuestions, fetchUsers, fetchUsersAndQuestions } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUnanswered: true,
            currentUser: ''
        };
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentDidMount() {
        this.props.fetchUsersAndQuestions()
        this.setState({currentUser: this.props.currentUser})
    };

    renderButtons() {
        let unansweredButtonClass = ""
        let answeredButtonClass = ""

        if (this.state.isUnanswered) {
            unansweredButtonClass = "ui button primary"
            answeredButtonClass = "ui button"
        } else {
            unansweredButtonClass = "ui button"
            answeredButtonClass = "ui button primary"
        }

        return (
            <div>
                <button className={unansweredButtonClass} onClick={() => this.handleOnClick(true)}>
                    Unanswered Questions
                </button>
                <button className={answeredButtonClass} onClick={() => this.handleOnClick(false)}>
                    Answered Questions
                </button>
            </div>
        );
    };

    handleOnClick(isUnanswered) {
        // This funciton will change interface depending on a bool which lets us know
        // If we are rendering unanswered questions (true) or answered questions (false)
        if (isUnanswered === true) {
            this.setState({isUnanswered: true})
        } else {
            this.setState({isUnanswered: false})
        }
    }

    queryUserAttributes(post) {
        return this.props.users.filter(user => user.id === post)
    }

    renderQuestionList() {
        return this.props.questions.map(question => {
            //TODO: This could be destructed
            const userName = this.queryUserAttributes(question.author)[0].name
            const avatarURLStub = this.queryUserAttributes(question.author)[0].avatarURL
            const avatarURLFull = require(`../../api${avatarURLStub}`) 
            
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
                <div>
                    {this.renderButtons()}
                </div>
                <div>
                    <h1>Questions</h1>
                    <div className="ui celled list">
                        {this.renderQuestionList()}
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    // Sets our current user state
    return {
        questions: Object.values(state.questions),
        users: Object.values(state.users),
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { fetchQuestions, fetchUsers, fetchUsersAndQuestions })(HomePage);