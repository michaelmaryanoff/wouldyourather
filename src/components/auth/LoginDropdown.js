import React from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import history from '../../history';

class LoginDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }

    handleChange(change) {
        this.setState({value: change.target.value})   
    }

    handleOnClick(click) {
        click.preventDefault();
        
        console.log(this.state.value);
        if (this.state.value !== '') {
            this.props.signIn(this.state.value);
            history.push('/home')
        }
        
        
        
    }


    render() {    
        return (
        <form>
            <select className="ui dropdown" onChange={(event) => this.handleChange(event)}>
                <option value="">User</option>
                <option value="sarahEdo">Sarah Edo</option>
                <option value="tylerMcGinnis">Tyler McGinnis</option>
                <option value="johnDoe">John Doe</option>
            </select>
            <button onClick={(e) => this.handleOnClick(e)}>Login</button>
        </form>
        );
    }
}

const mapStateToProps = (state) => {
    // Sets our current user state
    // TODO: Set list of user in a getUsers() call and use to populate list
    return { currentUser: state.currentUser }
}
 
export default connect(mapStateToProps, { signIn })(LoginDropdown);