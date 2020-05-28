import React from 'react'
import { connect } from 'react-redux';

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
        console.log('submit state', this.state);
        
    }

    componentDidUpdate() {
        console.log(this.state);
        
    }

    render() {    
        console.log(this.props);
        
        return (
        <form>
            <select className="ui dropdown" onChange={(event) => this.handleChange(event)}>
                <option value="">User</option>
                <option value="sarahEdo">Sarah Edo</option>
                <option value="tylerMcGinnis">Tyler McGinnis</option>
                <option value="johnDoe">John Doe</option>
            </select>
            <button onClick={(event) => this.handleOnClick(event)}>Login</button>
        </form>
        );
    }
}

const mapStateToProps = (state) => {
    // Sets our current user state
    // TODO: Set list of user in in a getUsers() call
    return { currentUser: state.currentUser }
}
 
export default connect(mapStateToProps)(LoginDropdown);