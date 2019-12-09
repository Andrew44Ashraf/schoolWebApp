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
import Agreement from './Agreement';

import BooksInfo from './BooksInfo';
import Analytics from'./Analytics'

import Routers from './Routes';


class App extends React.Component {
  render() {
    let links = [
      { label: 'Signup', link: '#home', active: true },
      { label: 'Home', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Login', link: '#contact-us' },
    ];

    return (
     <div>
       <Header links={links} logo={logo} />
      <div className="container center">
      
        
        {/* <div className= 'Login-box'> */}

        <BooksInfo/>     
     


        </div>
       </div>
     
    );
  }
}

export default App;