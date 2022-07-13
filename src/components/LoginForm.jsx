import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import Form from "./Form";
import OtherMethods from "./OtherMethods"
class LoginForm extends React.Component{
    render(){
      return(
        <div id="loginform">
          <FormHeader title="Login" />
          <Form />
          <OtherMethods />
        </div>
      )
    }
    }

export default LoginForm;