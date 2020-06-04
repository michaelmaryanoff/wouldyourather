import React from 'react';
import { fetchQuestions, fetchUsers, fetchUsersAndQuestions } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isUnanswered: true,
            currentUser: ''
        };
    }

    componentDidMount() {
        this.props.fetchUsersAndQuestions()
        this.setState({currentUser: this.props.currentUser})
        // Temporarily pushes us back to login if there is no current user
        if (!this.props.currentUser) {
            history.push('/')
        }
    };

    renderResponseButton(question) {
        return (
            <div className="right floated content">
                <Link to={`/questions/response/${question.id}`} className="ui button primary">Respond</Link>
            </div>
        )
    }

    renderToggleButtons() {
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

    renderQuestionsListFilter(isUnanswered) {
        if (isUnanswered) {
            
            return this.props.questions.filter(question => !question.optionOne.votes.includes(this.state.currentUser) && !question.optionTwo.votes.includes(this.state.currentUser)).map(question => {
                
                const { name, avatarURL } = this.queryUserAttributes(question.author)[0]
                const avatarURLFull = require(`../../api${avatarURL}`)     
                    return (
                            <div className="item" key={question.id}>
                                {this.renderResponseButton(question)}
                                <div className="content">
                                    <img className="ui avatar image" alt="hey" src={avatarURLFull} />
                                    <div className="header">{`${name} asks:`}</div>
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
        } else {            
            return this.props.questions.filter(question => question.optionOne.votes.includes(this.state.currentUser) || question.optionTwo.votes.includes(this.state.currentUser)).map(question => {
                const { name, avatarURL } = this.queryUserAttributes(question.author)[0]
                const avatarURLFull = require(`../../api${avatarURL}`) 
                    return (  
                        <div className="item" key={question.id}>
                            <div className="content">
                                <img className="ui avatar image" alt="hey" src={avatarURLFull} />
                                <div className="header">{`${name} asks:`}</div>
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
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderToggleButtons()}
                </div>
                <div>
                    <h1>Questions</h1>
                    <div className="ui celled list">
                        {this.renderQuestionsListFilter(this.state.isUnanswered)}
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