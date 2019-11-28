import React from 'react';


class ForgetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            pass: '',
            passTwo:'',
            message:'',
            validMail:false,
            validPasswordStrength:false,
            validPassMatch:false
            }
    }
    emailIsavalidLogin(){
        var mail = this.state.email;
      if (mail == ''){
        this.setState({message:'Please enter your email address '});
        return
      }
      var validation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
      if (!validation){
        this.setState({message:"Please Enter a valid email address"});
      }else{
          this.setState({validMail:true})
      }
    }
    passWordMatch(){
        if (this.state.pass == '' || this.state.passTwo == ''){
          return
        }else{
          var confirmation =  this.state.pass == this.state.passTwo;
          if(!confirmation){
            this.setState({message:'Passwords do not match'});
          }else {
            this.setState({validPassMatch:true});
          }
        }
      }
    passWordStrength(){
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        var pwd = this.state.pass;
          if (pwd.length == 0 ){
            this.setState({message:"Please Enter your Password"});
          }else if(false == enoughRegex.test(pwd)){
            this.setState({message:'password at Must be at least 6  digits' }); 
          }else if (false == mediumRegex.test(pwd)){
            this.setState({message:'weak Password'});
          }else if (false == strongRegex.test(pwd)){
            this.setState({message:'Meduim password',validPasswordStrength: true});
          }else{
            this.setState({passWordStrength:'Strong', validPasswordStrength: true });
        }
      }
 
    async sendDataBackend(){
        await this.passWordStrength();

        await this.passWordMatch();
        
        await this.emailIsavalidLogin();

        if(this.state.validMail == true && this.state.validPasswordStrength == true && this.state.validPassMatch == true){
            console.log("connect to back-end");
        }else{
            console.log('no');
            console.log(this.state.validPasswordStrength);
            console.log(this.state.validPassMatch);
            console.log(this.state.validMail);
            
        }

    }
    render(){
        return(
            <div className="login-box">
        <div className="textbox">
            <i className="fas fa-user"></i>
            <input 
              type="text" 
              placeholder="email" 
              onChange={event=> this.setState({email:event.target.value})}
              />
               
          </div>
          <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input 
                      type="password" 
                      placeholder="New password"
                      onChange = {event=> this.setState({pass: event.target.value})}
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
                  value="Reset Password"
                  onClick = {()=>this.sendDataBackend()} 
                />
 
                <div>
                    <p> {this.state.message}</p>
                </div>
          </div>
        )
    }
}
export default ForgetPassword;