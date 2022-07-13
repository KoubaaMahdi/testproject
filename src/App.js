import React from "react";
import ReactDOM from "react-dom";
import FormHeader from "./components/FormHeader";
import OtherMethods from "./components/OtherMethods";
import './styles.css';

const App = props => (
  <LoginForm />
);


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



const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);









export default App;