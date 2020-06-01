import React from 'react';
import { fetchQuestions } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {


        return <div>HomePage</div>;
    }
    
}

const mapStateToProps = (state) => {
    // Sets our current user state
    return {
        questions: Object.values(state.questions)
    }
}

export default connect(mapStateToProps, { fetchQuestions })(HomePage);