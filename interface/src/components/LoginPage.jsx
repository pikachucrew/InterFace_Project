import React, { Component } from 'react';
import fire from '../config';
import { navigate } from '@reach/router';


class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    invalid: false
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
          <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-24">Log In</button>
            <button onClick={this.signup} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded m-4 w-24">Sign Up</button>
        </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
