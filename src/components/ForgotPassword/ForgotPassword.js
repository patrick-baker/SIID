import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ForgotPassword extends Component {
    state = {
        email: '',
        showError: false,
        messageFromServer: '',
        showNullError: false,
    }

    // Event change listeners for altering this.state.email that the user is sending a reset email to
    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    // a post request which is checking for the user's email in the database, 
    // and generating a hashtoken if found
    sendEmail = async (e) => {
        e.preventDefault();
        const { email } = this.state;
        if (email === '') {
            this.setState({
                showError: false,
                messageFromServer: '',
                showNullError: true,
            });
        } else {
            try {
                const response = await axios.post(
                    '/api/user/forgotPassword',
                    {
                        email,
                    },
                );
                console.log(response.data);
                if (response.data === 'recovery email sent') {
                    this.setState({
                        showError: false,
                        messageFromServer: 'recovery email sent',
                        showNullError: false,
                    });
                }
            } catch (error) {
                console.error(error.response.data);
                if (error.response.data === 'email not in db') {
                    this.setState({
                        showError: true,
                        messageFromServer: '',
                        showNullError: false,
                    });
                }
            }
        }
    };

    render() {
        const {
            email, messageFromServer, showNullError, showError
        } = this.state;

        return (
            <div>
                <h4>Forgot Password Screen</h4>
                <form className="profile-form" onSubmit={this.sendEmail}>
                    <input
                        id="email"
                        label="email"
                        value={email}
                        onChange={this.handleChange('email')}
                        placeholder="Email Address"
                    />
                    <button
                    > Send Password Reset Email </button>
                </form>
                {showNullError && (
                    <div>
                        <p>The email address cannot be null.</p>
                    </div>
                )}
                {showError && (
                    <div>
                        <p>
                            That email address isn&apos;t recognized. Please try again or
                            register for a new account.
                         </p>
                        <button
                            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
                        > Register </button>
                    </div>
                )}
                {messageFromServer === 'recovery email sent' && (
                    <div>
                        <h3>Password Reset Email Successfully Sent!</h3>
                    </div>
                )}
                <Link to="/home" > Back To Home </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
  };
  
export default connect(mapStateToProps)(ForgotPassword);