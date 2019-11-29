import React from "react";
import { Route, Switch, Link} from "react-router-dom";
import SignUp from "./SignUp";
import Validation from "./Validation";
import Login from "./Login";
import Books from "./Books"
import Admin from "./Admin"
import ForgetPassword from "./forgetPassword"
const Routes =  (props) => {

  return (
  <Switch>
    <Route path="/" exact component={SignUp} />
    <Route path="/Validate" exact component={Validation} />
    <Route path="/Login" exact component={Login} />
    <Route path="/Books" exact component={Books} />
    <Route path="/Admin" exact component={Admin} />
    <Route path="/ForgetPassword" exact component={ForgetPassword} />


  </Switch>
  )
}
  export default Routes;