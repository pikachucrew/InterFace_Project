import React, { Component } from 'react';
import fire from '../config';


class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    invalid: false,
    newUser: false,
    signedUp: false,
    newEmail: '',
    newPassword: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  login = e => {
    const { email, password } = this.state;
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ invalid: true });
      });
  };

  signup = e => {
    const { newEmail, newPassword } = this.state;
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(newEmail, newPassword)
      .then(() => {
        this.setState({ signedUp: true, invalid: false });
      })
      .catch(err => {
        this.setState({ invalid: true });
      });
  };

  newUser = () => {
    this.setState(currentState => {
      return {
        newUser: !currentState.newUser
      };
    });
  };

  render() {
    const {
      email,
      password,
      invalid,
      newUser,
      newEmail,
      newPassword,
      signedUp
    } = this.state;
    return (
      <div>
        <div class="bg-blue-200 flex flex-row justify-center items-center">
          {/* <h3 class="text-3xl">Welcome to the Interface Web App!</h3> */}
          <div class="text-xl">
          </div>
        </div>
        <div class="bg-blue-200">
        {invalid && <p>Invalid Details</p>}
        <form onSubmit={this.login} class="flex flex-col items-center bg-white w-auto">
          <label class="">
            E-mail address:
            <input class="m-4 w-auto"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label class="w-auto">
            Password:
            <input class="m-4"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Log In</button>
        </form>
        <button onClick={this.newUser}>New User?</button>
        {newUser && (
          <form onSubmit={this.signup}>
            <label>
              E-mail address:
              <input
                type="email"
                name="newEmail"
                value={newEmail}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-24">Sign Up</button>
            {signedUp && <p>Signed up! You may now log in with your details</p>}
          </form>
        )}
      </div>
    );
  }
}

export default LoginPage;
