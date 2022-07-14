import React from "react";
import { ReactDOM } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormCreateAccount from "./FormCreateAccount"
const Form = props => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormButton title="Log in"/>
      <FormCreateAccount/>
    </div>
   );

   export default Form;