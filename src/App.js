import React from 'react';

import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import ForgetPassword from './forgetPassword';
import Header from './Header';
import logo from './logo.png';
import Admin from './Admin';
import Books from './Books';
import Argeement from './Agreement';
import axios from 'axios';


class App extends React.Component {
  render() {
    let links = [
      { label: 'Signup', link: '#home', active: true },
      { label: 'Home', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Login', link: '#contact-us' },
    ];

    return (
     
      <div className="container center">

        <Header links={links} logo={logo} />
        <div className= 'Login-box'>
        <Login/>     
        </div>
      </div>
     
    );
  }
}

export default App;