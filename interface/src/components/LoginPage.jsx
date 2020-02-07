import React, { Component } from 'react';
import fire from '../config';

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
      .then(() => {
        this.setState({ invalid: false });
      })
      .catch(err => {
        this.setState({ invalid: true });
      });
  };

  render() {
    const { email, password, invalid } = this.state;
    return (
      <div className="flex flex-row">
        <p className="w-2/5 bg-white opacity-75 shadow-2xl absolute p-20 m-20 mt-40 font-disc rounded-lg">
          Interface is committed to honouring your rights to data privacy and
          protection. <br />
          <br />
          These ethical principles guided our development, we have no need
          to collect and process users' personal information beyond what is
          required for the functioning of the app, and this will never change.{' '}
          <br />
          <br />
          We have a privacy conscious mindset, and do not store or send images.
        </p>

        <div className="w-2/5 p-20 m-20 mt-40 shadow-2xl absolute right-0 rounded-lg">
          {invalid && <p>Invalid Details</p>}
          <div className="flex flex-col justify-between items-center">
            <h2 className="font-h2 tracking-widest text-4xl">Log In</h2>
            <form
              className="flex flex-col justify-between items-center"
              onSubmit={this.login}
            >
              <input
                className="m-4 p-4 bg-gray-100 border-b-2 opacity-100"
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={this.handleChange}
              />
              <input
                className="m-4 p-4 bg-gray-100 border-b-2"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="button-log text-white font-bold py-2 px-4 rounded m-5"
              >
                Log In
              </button>
              <button
                onClick={this.signup}
                className="button-log hover:border-gray-300 text-white font-bold py-2 px-4 rounded"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
