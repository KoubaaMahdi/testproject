import React from "react";
import { ReactDOM } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormCreateAccount from "./FormCreateAccount"
const Form2 = props => (
    <div>
      <FormInput description="Username" placeholder="Enter your username" type="text" />
      <FormInput description="Password" placeholder="Enter your password" type="password"/>
      <FormInput description="email" placeholder="Enter your email" type="email"/>
      <FormButton title="Log in"/>
    </div>
   );

   export default Form2;