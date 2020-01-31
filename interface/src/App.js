import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import CamPage from './components/CamPage';
import { Router } from '@reach/router'
import LoginPage from './components/LoginPage';
import {startVideo} from './utils/utils'

export default class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <Header className="Header"/>
        <Router className="Router">
          <LoginPage path='/' />
          <Dashboard path='/dashboard' />
          <CamPage path='/webcam' startVideo={startVideo}/>
        </Router>
      </div>
    )
  }
}