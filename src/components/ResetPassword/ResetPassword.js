import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ResetPassword extends Component {
  state = {
    password: '',
  };

  async componentDidMount() {
    const token = this.props.match.params.token;
    console.log(token);
    this.props.dispatch({type: 'RESET_PASSWORD', payload: {token: token}});
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'CLEAR_RESET_REDUCER'});
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { password } = this.state;
    const { username } = this.props.resetPassword;
    const { token } = this.props.match.params;
    this.props.dispatch({type: 'UPDATE_PASSWORD', payload: {
      username: username,
      password: password,
      resetPasswordToken: token
    }})
  };

  render() {
    const { password } = this.state;
    const {error, isLoading, updated } = this.props.resetPassword;

    if (error) {
      return (
        <div>
          <h1>Password Reset</h1>
          <div>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <div>
              <Link
                to="/"
              > Go Home
            </Link>
            </div>
            <div>
              <Link
                to="/forgotPassword"
              >Forgot Password?
            </Link>
            </div>
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div>
          <h1>Password Reset</h1>
          <div>Loading User Data...</div>
        </div>
      );
    }
    return (
      <div className="no_user">
        <h1>Password Reset</h1>
        <form className="password-form" onSubmit={this.updatePassword}>
          <input
            id="password"
            label="password"
            onChange={this.handleChange('password')}
            value={password}
            type="password"
          />
          <input
            type="submit"
            value="Update Password"
          />
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Link
              to="/"
            >Login</Link>
          </div>
        )}
        <Link to="/" >Go Home</Link>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ResetPassword);