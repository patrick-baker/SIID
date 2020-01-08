import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    const { username, password, email, confirmPassword } = this.state;
    if (username && password && email && password == confirmPassword) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
          email: email
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="login__main no_user">
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1 className="login__header" >Register User</h1>
          <div>
            <label htmlFor="username" className="login__inputLabel">
              Username:
              </label>
            <input
              type="text"
              name="username"
              className="login__input"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />

          </div>
          <div>
            <label htmlFor="email" className="login__inputLabel">
              Email:
              </label>
            <input
              type="text"
              name="email"
              className="login__input"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
            />

          </div>
          <div>
            <label htmlFor="password" className="login__inputLabel">
              Password:
              </label>
            <input
              type="password"
              name="password"
              className="login__input"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

          </div>
          <div>
            <label htmlFor="confirmPassword" className="login__inputLabel">
              Confirm password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="login__input"
              value={this.state.confirmPassword}
              onChange={this.handleInputChangeFor('confirmPassword')}
            />

          </div>
          <div>
            <button
              className="register login__loginButton"
              type="submit"
              name="submit"
            >Register</button>
          

          <button
            type="button"
            className="link-button login__loginButton"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
          </div>
        </form>
      </div >
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

