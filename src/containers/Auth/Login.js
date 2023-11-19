import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from '../../src/assets/images/user.svg';
// import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
// import { FormattedMessage } from 'react-intl';

// import adminService from '../services/adminService';
import authService from '../../services/authService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPassword: false,
            email: "",
            password: "",
            errorMessage: "",
        }
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleShowPassword = () => {
        this.setState({ isShowPassword: !this.state.isShowPassword });
    }

    handleLogin = async () => {
        this.setState({
            errorMessage: ""
        })

        const email = this.state.email;
        const password = this.state.password;

        try {
            const data = await authService.login(email, password);
            if (data && data.errorCode !== 0) {
                this.setState({
                    errorMessage: data.message,
                });
            }

            if (data && data.errorCode === 0) {
                this.props.userLoginSuccess(data.data);
            }
        } catch (e) {
            if (e.response.data) {
                this.setState({
                    errorMessage: e.response.data.message,
                });
            }
        }
    }

    render() {
        return (
            <div className="login-bg">
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center login-title'>Login</div>
                        <div className='col-12 form-group'>
                            <label>Username</label>
                            <input
                                type='text'
                                placeholder='Enter your username'
                                value={this.state.email}
                                onChange={(e) => this.handleChangeEmail(e)}
                            />
                        </div>
                        <div className='col-12 form-group'>
                            <label>Password</label>
                            <div className='login-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(e) => this.handleChangePassword(e)}
                                />
                                <div className='login-showpass' onClick={this.handleShowPassword}>
                                    {!this.state.isShowPassword &&
                                        <i tabindex="0" role="button" aria-label="accessibilityLabels_login_modal_eyeClosedIcon" aria-pressed="false" className="tiktok-tnebwf-IPasswordIcon etcs7ny3">
                                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M38.88 41.7a1 1 0 0 0 1.41 0l1.42-1.4a1 1 0 0 0 0-1.42l-3.86-3.86a24.57 24.57 0 0 0 6.27-9.69 1 1 0 0 0 0-.66C41 15.8 32.66 9 23 9c-3.27 0-6.35.73-9.12 2.05L9.12 6.29a1 1 0 0 0-1.41 0L6.29 7.71a1 1 0 0 0 0 1.41l32.59 32.59Zm-22-27.66A17.8 17.8 0 0 1 23 13c12.75 0 17 12 17 12s-1.38 3.9-4.93 7.25l-4.54-4.55A7.99 7.99 0 0 0 23 17c-.95 0-1.86.16-2.7.47l-3.43-3.43ZM1.87 24.67a24.64 24.64 0 0 1 5.8-9.23l2.77 2.78C7.25 21.46 6 25 6 25s4.25 12 17 12a18 18 0 0 0 5.42-.8l3.05 3.05A21.2 21.2 0 0 1 23 41c-9.83 0-17.93-6.63-21.13-15.67a1 1 0 0 1 0-.66Z"></path><path d="M15 25c0-.68.08-1.35.24-1.98l9.74 9.73A8.02 8.02 0 0 1 15 25Z"></path></svg>
                                        </i>
                                    }
                                    {this.state.isShowPassword &&
                                        <i tabindex="0" role="button" aria-label="accessibilityLabels_login_modal_eyeOpenIcon" aria-pressed="true" className="tiktok-tnebwf-IPasswordIcon etcs7ny3">
                                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M41.4 23.71a.9.9 0 0 1 0 .58c-.63 1.92-2.2 4.89-4.82 7.51A17.35 17.35 0 0 1 24 37.11c-5.42 0-9.55-2.28-12.58-5.3a20.44 20.44 0 0 1-4.82-7.52.9.9 0 0 1 0-.58c.63-1.92 2.2-4.89 4.82-7.51A17.35 17.35 0 0 1 24 10.89c5.42 0 9.55 2.28 12.58 5.3a20.44 20.44 0 0 1 4.82 7.52ZM24 41c13.83 0 20.82-11.7 21.96-16.81a.85.85 0 0 0 0-.38C44.82 18.71 37.83 7 24 7S3.18 18.7 2.04 23.81a.85.85 0 0 0 0 .38C3.18 29.29 10.17 41 24 41Z"></path><path d="M24 27.21a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm0 4.29a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"></path></svg>
                                        </i>
                                    }
                                </div>
                            </div>
                        </div>
                        <div style={{ color: "red" }}>
                            {this.state.errorMessage}
                        </div>
                        <div className='d-flex justify-content-center mb-5'>
                            <button
                                className='login-btn'
                                onClick={this.handleLogin}
                            >Log in</button>
                        </div>
                        {/* <span className='text-center'>Forgot password?</span> */}
                        <span className='text-center'>Or sign in with:</span>
                        <div className='login-media'>
                            <div className='icon'>
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div className='icon'>
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className='icon'>
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
