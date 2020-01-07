import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ForgotPassword extends Component {
    state = {
        email: '',
    }

    // Event change listener for altering this.state.email that the user is sending a reset email to
    handleChange = name => (event) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    sendEmail = (e) => {
        e.preventDefault();
        const { email } = this.state;
        // dispatches to forgotPasswordSaga
        this.props.dispatch({type: 'FORGOT_PASSWORD', payload: email})
    };

    render() {
        const { email } = this.state;
        const { messageFromServer, showNullError, showError } = this.props.forgotPassword

        return (
            <div className="login__main">
                <h1 className="login__header" >Forgot Password?</h1>
                <form className="profile-form" onSubmit={this.sendEmail}>
                    <label htmlFor="email" className="login__inputLabel">Recovery Email:</label>
                    <input
                    
                        name="email"
                        value={email}
                        onChange={this.handleChange('email')}
                        placeholder="Email"
                        className="login__input"
                    />
                    <button className="login__loginButton"> Send Password Reset Email </button>
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