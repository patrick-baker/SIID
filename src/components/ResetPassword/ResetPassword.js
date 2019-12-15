import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ResetPassword extends Component {
  state = {
    username: '',
    password: '',
    updated: false,
    isLoading: true,
    error: false,
  };


  async componentDidMount() {
    const token = this.props.match.params.token;
    console.log(token);
    try {
      const response = await axios.get(`/api/user/reset/${token}`, {
      });
      console.log(response);
      if (response.data.message === 'password reset link a-ok') {
        this.setState({
          username: response.data.username,
          isLoading: false
        });
      }
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        isLoading: false,
        error: true
      });
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      const response = await axios.put(
        '/api/user/updatePasswordViaEmail',
        {
          username,
          password,
          resetPasswordToken: token,
        },
      );
      console.log(response.data);
      if (response.data.message === 'password updated') {
        this.setState({
          updated: true,
          error: false,
        });
      } else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const {
      password, error, isLoading, updated
    } = this.state;

    if (error) {
      return (
        <div>
          <h1>Password Reset</h1>
          <div>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <div>
              <Link
                link="/"
              > Go Home
            </Link>
            </div>
            <div>
              <Link
                link="/forgotPassword"
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
      <div>
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
              link="/login"
            >Login</Link>
          </div>
        )}
        <Link link="/" >Go Home</Link>
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