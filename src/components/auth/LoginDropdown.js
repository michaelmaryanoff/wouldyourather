import React from 'react';
import { connect } from 'react-redux';
import { signIn, fetchUsersAndQuestions } from '../../actions';
import history from '../../history';

class LoginDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '' };
  }

  componentDidMount() {
    this.props.fetchUsersAndQuestions();
  }

  handleChange = change => {
    this.setState({ id: change.target.value });
  };

  renderDropDownMenu() {
    return this.props.users.map(user => {
      return (
        <option id={user.id} key={user.id} value={user.id}>
          {user.name}
        </option>
      );
    });
  }

  handleOnClick(click) {
    click.preventDefault();

    if (this.state.id !== '' && 'selectUser') {
      console.log('redirect');

      this.props.signIn(this.state.id);
      history.push('/home');
    }
  }

  render() {
    return (
      <form>
        Select a user <p />
        <div>
          <select
            className="ui dropdown"
            onChange={event => {
              this.handleChange(event);
            }}
          >
            <option id="selectUser">Select User</option>
            {this.renderDropDownMenu()}
          </select>
        </div>
        <p />
        <button onClick={e => this.handleOnClick(e)}>Login</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: Object.values(state.users.userList),
    questions: Object.values(state.questions)
  };
};

export default connect(mapStateToProps, {
  signIn,
  fetchUsersAndQuestions
})(LoginDropdown);
