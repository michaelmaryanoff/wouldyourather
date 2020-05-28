import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import history from '../../history';

class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }

    handleOnClick(click) {
        click.preventDefault()

        this.props.signOut();
        history.push('/')
    }
    render() {
        return (
            <button className="item" 
                    onClick={ (e) => this.handleOnClick(e)}>
                Logout</button>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: null }
}

export default connect(mapStateToProps, { signOut })(Logout);