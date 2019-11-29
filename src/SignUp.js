import React from 'react';
import './style.css';
import { throws } from 'assert';
import { Router, Route, Switch,Redirect } from "react-router";
import Link from from "react-router-dom";
import logo from './logo.png';
import Login from './Login';



class SignUp extends React.Component {
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
        validPasswordStrength: false,
        validPasswordMatch: false,
        validMail:false,
        validUserName:false,
        validId:false,
        validGrade:false
      }
    }
    resetStates(){
      this.setState({
        userName: '',
        mail: '',
        id : '',
        grade: '',
        passOne:'',
        passTwo: '',
        passWordStrength: 'weak', 
        message:'', 
        validPasswordStrength: false,
        validPasswordMatch: false,
        validMail:false,
        validUserName:false,
        validId:false,
        validGrade:false
      })
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
          this.setState({passWordStrength: "Meduim" , message:'pass is meduim',validPasswordStrength: true});
        }else{
          this.setState({passWordStrength:'Strong', validPasswordStrength: true });
      }
    }
    gradeValid(){
      var gradeSelected = this.state.grade;
      if (gradeSelected == ""){
        this.setState({message: "Please Select your Grade"});
      }else{
        this.setState({validGrade:true});
      }


    }

    async validInfo(){
      

      await this.passWordStrength();

      await this.passWordMatch();

      await this.gradeValid();

      await this.idValid();


      await this.emailIsValid();

      await this.UserNameValid();

      if(this.state.validMail == true && this.state.validPasswordMatch == true && this.state.validPasswordStrength == true && this.state.validUserName == true && this.state.validId == true && this.state.validGrade == true){
        console.log('connect to back-end');
        this.resetStates();
      }else{
        console.log("no");
        console.log(this.state.validId);
        console.log(this.state.validMail);
        console.log(this.state.validUserName);
        console.log(this.state.validPasswordStrength);
        console.log(this.state.validPasswordMatch);
        console.log(this.state.passWordStrength);
        console.log(this.state.grade);
        console.log(this.state.validGrade);
      }



      

    }
    UserNameValid(){
      var name = this.state.userName;
      if(name == ''){
        this.setState({message:'Please Enter your Name'});
      }else{
        this.setState({validUserName: true});
      }

    }
    passWordMatch(){
      if (this.state.passOne == '' || this.state.passTwo == ''){
        return
      }else{
        var confirmation =  this.state.passOne == this.state.passTwo;
        if(!confirmation){
          this.setState({message:'Passwords do not match'});
        }else {
          this.setState({validPasswordMatch:true});
        }
      }
    }
    idValid(){
      var id = this.state.id
      if(id == ''){
        this.setState({message:'Please Enter your school ID'});
      }else{
        this.setState({validId: true});
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
      }else {
        this.setState({validMail:true});
      }
    }
    _handleChange = (event) => {
      this.setState({ grade: event.target.value });
    }
    RedirectLogin(){
      return 
      
    }
    
    render() {
      return (
       
        <div className ="box"> 
            <div className="login-box">
              <div className="textbox">
                  <i className="fas fa-user icon"></i>
                  <input 
                    type="text" 
                    placeholder="student name" 
                    onChange={event=> this.setState({userName:event.target.value})}
                    />
                     
                </div>
                <div className="textbox">
                  <i class="fas fa-envelope-square"></i>
                  <input 
                    type="text" 
                    placeholder="mail" 
                    onChange={event=> this.setState({mail:event.target.value})}
                    />
                     
                </div>
                <div className="textbox">
                  <i class="far fa-id-badge"></i>
                  <input 
                    type="text" 
                    placeholder="id" 
                    onChange={event=> this.setState({id:event.target.value})}
                    />
                     
                </div>
                <div>
                  <select className = "dropDown" onChange = {this._handleChange}>
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
                    className=" signupbtn" 
                    value="Sign up"
                    onClick = {()=>this.validInfo()} 
                  />
                  <p> 
                  {this.state.message} 
                </p> 
                <div>

                <input 
                  type="button" 
                  className=" signupbtn" 
                  value="Login"
                  onClick = {()=>this.RedirectLogin()} 
                />
                 <Link to='/path' > some stuff </Link>`

                </div>
                 </div>
                          
              

          </div>
      )
    }
  }

  export default SignUp ;