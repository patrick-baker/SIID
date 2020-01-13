import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="login__main">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login}>
          <img src='./siidlogo.png' style={{width:"120px", paddingTop:'1rem', paddingBottom:'1.5rem'}}/>

          <div>
            <input
              placeholder='Username'
              type="text"
              className="login__input"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />

          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="login__input"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
          <div>
            <span
              type="button"
              className="link-button login__forgotPassword"
              onClick={() => { this.props.history.push('/forgotPassword') }}
            >
              Forgot Password?
          </span>
          </div>
          <div>
            <button
              className="log-in login__loginButton"
              type="submit"
              name="submit"
            >Log In</button>

            <button
              type="button"
              className="link-button login__loginButton"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
            >
              Register
          </button>
          </div>

        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
