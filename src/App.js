import React from "react";
import ReactDOM from "react-dom";
import FormHeader from "./components/FormHeader";
import LoginForm from "./components/LoginForm";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import Form from "./components/Form";
const App = props => (
  <LoginForm />
);











const OtherMethods = props => (
<div id="alternativeLogin">
  <label>Or sign in with:</label>
  <div id="iconGroup">
    <Facebook />
    <Twitter />
    <Google />
  </div>
</div>
);

const Facebook = props => (
<a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
<a href="#" id="twitterIcon"></a>
);

const Google = props => (
<a href="#" id="googleIcon"></a>
);

export default App;