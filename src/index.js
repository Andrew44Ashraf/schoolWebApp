import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SignUp from './SignUp';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import Books from './Books';
import Routes from './Routes'
import{BrowserRouter} from 'react-router-dom'
import logo from './logo.png';
import Header from './Header';



const App= () =>{
    let links = [
        { label: 'Signup', link: '#home', active: true  },
        { label: 'Home', link: '#about' },
        { label: 'Portfolio', link: '#portfolio' },
        
      ];
    return(
        
        <div>
       <Header links={links} logo={logo} />
      <div className="container center">
      
        
        {/* <div className= 'Login-box'> */}
        
       <BrowserRouter>
       <Routes/>
       </BrowserRouter>

        </div>
       </div>       
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
