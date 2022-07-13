import React from "react";
import { ReactDOM } from "react";

const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} required/>
    </div>  
    );

export default FormInput;