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
    }

    handleChange(change) {
        console.log('change', change.target.value);
        
        this.setState({id: change.target.value})   
    }

    renderDropDownMenu() {
        return this.props.users.map(user => {
            return (
                <option id={user.id} key={user.id}>{user.name}</option>
            )
        })
    }

    handleOnClick(click) {
        click.preventDefault();
        
        if (this.state.id !== '' && 'selectUser') {
            this.props.signIn(this.state.id);
            history.push('/home')
        }
    }

    render() {  
        console.log('props in render', this.props.users);
        return (
        <form>
            Select a user <p />
            <div>
            <select className="ui dropdown" onChange={(event) => this.handleChange(event)}>
                <option id="selectUser">Select User</option>
                {this.renderDropDownMenu()}
            </select>
            </div>
            <p />
            <button onClick={(e) => this.handleOnClick(e)}>Login</button>
        </form>
        );
    }
}

const mapStateToProps = (state) => {
    // Sets our current user state
    return {
        users: Object.values(state.users),
        currentUser: state.currentUser
    }
}
 
export default connect(mapStateToProps, { signIn, fetchUsers })(LoginDropdown);