import React, { Component } from 'react';
import './styles/style.css';
// import './styles/App.css'
import fire from './config';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CamPage from './components/CamPage';
import { Router } from '@reach/router';
import LoginPage from './components/LoginPage';
import * as utils from './utils/utils';
import bgImg from './assets/background.jpg'

const bgStyle = {
  backgroundImage: 'url(' + bgImg + ')',
}

export default class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    console.log(this.state.user);
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
    console.log(user);
    return (
      <div className="App" class="h-screen bg-scroll" style={bgStyle}>
        <Header className="Header" />
        {user ? (
          <Router className="Router" class="w-screen">
            <Dashboard path="/" user={user.email}/>
            <CamPage path="/webcam" startVideo={utils.startVideo} user={user.email}/>
          </Router>
        ) : (
          <LoginPage path="/" />
        )}
      </div>
    );
  }
}
