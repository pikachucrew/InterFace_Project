import React from 'react';
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import CamPage from './components/CamPage';
import { Router } from '@reach/router'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LoginPage path='/' />
        <Dashboard path='/dashboard' />
        <CamPage path='/webcam' />
      </Router>
    </div>
  );
}

export default App;
