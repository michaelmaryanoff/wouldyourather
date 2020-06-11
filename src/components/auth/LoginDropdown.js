import React from 'react';
import { connect } from 'react-redux';
import { signIn, fetchUsersAndQuestions } from '../../actions';
import history from '../../history';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

class LoginDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', redirectToRefferer: false };
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

  handleOnClick = click => {
    click.preventDefault();

    if (this.state.id !== '' && 'selectUser') {
      this.props.signIn(this.state.id);
      this.setState({ redirectToRefferer: true });
    }
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/home' }
    };

    if (this.state.redirectToRefferer === true) {
      console.log('did redirect to reffer');
      console.log('from', from);

      return <Redirect to={from} />;
    }

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

export default withRouter(
  connect(mapStateToProps, {
    signIn,
    fetchUsersAndQuestions
  })(LoginDropdown)
);
