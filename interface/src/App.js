import React, { Component } from 'react';
import './App.css';
import fire from './config';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CamPage from './components/CamPage';
import { Router } from '@reach/router';
import LoginPage from './components/LoginPage';
import { startVideo } from './utils/utils';

export default class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header className="Header" />
        <Router className="Router">
          <LoginPage path="/" user={user} />
          <Dashboard path="/dashboard" user={user} />
          <CamPage path="/webcam" startVideo={startVideo} />
        </Router>
      </div>
    );
  }
}
