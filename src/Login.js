import React from 'react';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            pass: '',
            message:'',
            validMail:false,
            validPassword:false
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
    passValid(){
        var pwd = this.state.pass;
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if(pwd.length == 0){
            this.setState({message : 'Please Enter your Password'});
        }else if (false == enoughRegex.test(pwd)){
            this.setState({message:'Password must be at least six digits'});
        }else{
            this.setState({validPassword:true})
        }
    }
 
    async sendDataBackend(){
        await this.passValid();
        await this.emailIsavalidLogin();
        if(this.state.validMail == true && this.state.validPassword == true){
            console.log("connect to back-end");
        }else{
            console.log('no');
            console.log(this.state.validPassword);
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
                      placeholder="password"
                      onChange = {event=> this.setState({pass: event.target.value})}
                      />
             </div>
             <input 
                  type="button" 
                  className="btn" 
                  value="Login"
                  onClick = {()=>this.sendDataBackend()} 
                />
            <input 
                  type="button" 
                  className="btn" 
                  value="Forget Password"
                  onClick = {()=>this.sendDataBackend()} 
                />
           
                <div>
                    <p> {this.state.message}</p>
                </div>
          </div>
        )
    }
}
export default Login;