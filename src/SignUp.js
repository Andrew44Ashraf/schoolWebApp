import React from 'react';
import './style.css';
import { throws } from 'assert';
import logo from './logo.png';




class Login extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        userName: '',
        mail: '',
        id : '',
        grade: '',
        passOne:'',
        passTwo: '',
        passWordStrength: 'weak', 
        message:'', 
        validInfo: 'false'
      }
    }
    signUp(){
      console.log(this.state.pass);
      console.log(this.state.userName);
      console.log(this.state.mail);
      console.log(this.state.id);
      console.log(this.state.passOne);
    }
    passWordStrength(){
      var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
      var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
      var enoughRegex = new RegExp("(?=.{6,}).*", "g");
      var pwd = this.state.passOne;
        if (pwd.length == 0 ){
          this.setState({message:"Please Enter your Password"});
        }else if(false == enoughRegex.test(pwd)){
          this.setState({message:'password at Must be at least 6  digits' }); 
        }else if (false == mediumRegex.test(pwd)){
          this.setState({message:'weak Password'});
        }else if  (false == strongRegex.test(pwd)){
          this.setState({passWordStrength: "Meduim" , message:'pass is meduim'});
        }else{
          this.setState({passWordStrength:'Strong', message:'pass is strong'});
      }
    }
    validInfo(){
      

      this.passWordStrength();

      this.passWordMatch();
      
      this.emailIsValid();

      var name = this.state.userName;
      if(name == ''){
        this.setState({message:'Please Enter your Name'});
      }

    }
    passWordMatch(){
      var confirmation =  this.state.passOne == this.state.passTwo;
      if(!confirmation){
        this.setState({message:'Passwords do not match'});
      }
    }
    emailIsValid () {
      var email = this.state.mail;
      if (email.length == 0){
        this.setState({message:'Please enter your mail'});
        return
      }
      var validation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!validation){
        this.setState({message:"Please Enter a valid email address"});
      }
    }
    
    render() {
      return (
       
        <div className ="box"> 
            <div className="login-box">
              <div className="textbox">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    placeholder="student name" 
                    onChange={event=> this.setState({userName:event.target.value})}
                    />
                     
                </div>
                <div className="textbox">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    placeholder="mail" 
                    onChange={event=> this.setState({mail:event.target.value})}
                    />
                     
                </div>
                <div className="textbox">
                  <i className="fas fa-user"></i>
                  <input 
                    type="text" 
                    placeholder="id" 
                    onChange={event=> this.setState({id:event.target.value})}
                    />
                     
                </div>
                <div>
                  <select className = "dropDown" placeholder = "Choose your grade">
                    <option value = "grade 5" >  Grade 5</option>
                    <option value = "grade 6"  > Grade 6</option> 
                    <option value = "grade 7" > Grade 7</option> 
                    <option value = "grade 8" > Grade 8</option> 
                    <option value = "grade 9" > Grade 9</option> 
                    <option value = "grade 10" > Grade 10</option> 
                    <option value = "grade 11" > Grade 11</option> 
                    <option value = "grade 12" > Grade 12</option> 
                  </select>
                  </div>

                  <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input 
                      type="password" 
                      placeholder="password"
                      onChange = {event=> this.setState({passOne: event.target.value})}
                      />
                    </div>

                  <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input 
                      type="password" 
                      placeholder="confirm password"
                      onChange = {event=> this.setState({passTwo: event.target.value})}
                      />
                    </div>

                  <input 
                    type="button" 
                    className="btn" 
                    value="Sign up"
                    onClick = {()=>this.validInfo()} 
                  />
                  <p> 
                  {this.state.message} 
                </p> 
                <div>

                <input 
                  type="button" 
                  className="btn" 
                  value="Login"
                  onClick = {()=>this.validInfo()} 
                />
      
                </div>
                 </div>
                          
              

          </div>
      )
    }
  }

  export default Login ;