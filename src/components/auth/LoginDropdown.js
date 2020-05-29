import React from 'react'
import { connect } from 'react-redux';
import { signIn, fetchUsers } from '../../actions';
import history from '../../history';

class LoginDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {id: ''};
    }

    componentDidMount() {
        this.props.fetchUsers()
        console.log('props', this.props.users);
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    handleChange(change) {
        this.setState({id: change.target.id})   
    }

    handleOnClick(click) {
        click.preventDefault();
        
        if (this.state.id !== '') {
            this.props.signIn(this.state.id);
            history.push('/home')
        }
    }

    render() {  
        console.log('props in render', this.props.users);
          
        return (
        <form>
            Select a user <p></p>
            <select className="ui dropdown" onChange={(event) => this.handleChange(event)}>
                <option id="">User</option>
                <option id="sarahEdo">Sarah Edo</option>
                <option id="tylerMcGinnis">Tyler McGinnis</option>
                <option id="johnDoe">John Doe</option>
            </select>
            <p />
            <button onClick={(e) => this.handleOnClick(e)}>Login</button>
        </form>
        );
    }
}

const mapStateToProps = (state) => {
    // Sets our current user state
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}
 
export default connect(mapStateToProps, { signIn, fetchUsers })(LoginDropdown);