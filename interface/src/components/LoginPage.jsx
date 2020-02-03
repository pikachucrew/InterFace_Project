import React, { Component } from 'react';
import fire from '../config';
import { navigate } from '@reach/router';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    invalid: false
  };

  login = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ invalid: false });
        navigate('/dashboard');
      })
      .catch(err => {
        this.setState({ invalid: true });
      });
  };

  signup = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ invalid: true });
      });
  };

  render() {
    const { email, password, invalid } = this.state;
    return (
      <div>
        {invalid && <p>Invalid Details</p>}
        <form onSubmit={this.login}>
          <label>
            E-mail address:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Log In</button>
          <button onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
