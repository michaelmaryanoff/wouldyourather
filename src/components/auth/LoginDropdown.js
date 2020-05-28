import React from 'react'

class LoginDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        console.log(this.state);
    }

    handleChange(change) {
        this.setState({value: change.target.value})   
    }

    handleOnClick(click) {
        click.preventDefault();
    }

    componentDidUpdate() {
        console.log('update');
        console.log(this.state);
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
            <button onClick={(event) => this.handleOnClick(event)}>Login</button>
        </form>
        );
    }
}

export default LoginDropdown;