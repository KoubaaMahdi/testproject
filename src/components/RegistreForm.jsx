import React from "react";
import { ReactDOM } from "react";
import FormHeader from "./FormHeader";
import Form2 from "./Form2";
import OtherMethods from "./OtherMethods"
class RegistreForm extends React.Component{
    render(){
      return(
        <div id="loginform">
          <FormHeader title="Create Account" />
          <Form2 />
          <OtherMethods />
        </div>
      )
    }
    }

export default RegistreForm;