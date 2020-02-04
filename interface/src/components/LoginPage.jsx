import React, { Component } from "react";
import fire from "../config";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    invalid: false,
    newUser: false,
    signedUp: false,
    newEmail: "",
    newPassword: ""
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
      <div className="flex flex-row">
        <p className="w-2/5 bg-white opacity-75 shadow-2xl absolute p-20 m-20 mt-40 font-disc">
          Interface is committed to honoring your rights to data privacy and protection. <br /><br />Application of these priciples guided our development, we have no need to collect and process users' personal information beyond what is required for the functioning of the app, and this will never change. <br /><br />We have a privacy conscious culture, strongly supported by GDPR.  
        </p>

        <div className="w-2/5 p-20 m-20 mt-40 shadow-2xl absolute right-0">
          {invalid && <p>Invalid Details</p>}
          <div className="flex flex-col justify-between items-center">
            <h2 className="font-h2 tracking-widest text-4xl">Log In</h2>
            <form className="flex flex-col justify-between items-center"
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
                name="password" placeholder="Password"

                value={password}
                onChange={this.handleChange}
              />
              <button type="submit" className="button-log text-white font-bold py-2 px-4 rounded m-5">Submit</button>
            </form>
            <button onClick={this.newUser} className="button-log hover:border-gray-300 text-white font-bold py-2 px-4 rounded">New User?</button>
            {newUser && (
              <form onSubmit={this.signup} className="">
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
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded w-24"
                >
                  Sign Up
                </button>
                {signedUp && (
                  <p>Signed up! You may now log in with your details</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
