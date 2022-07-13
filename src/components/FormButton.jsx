import React from "react";
import { ReactDOM } from "react";


const FormButton = props => (
    <div id="button" class="row">
      <button onClick={window.open("../../public/detection.html")}>{props.title}</button>
    </div>
    );

export default FormButton;