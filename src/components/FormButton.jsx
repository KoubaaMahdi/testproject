import React from "react";
import ReactDOM from "react-dom"
import Skeleton from "../Skeleton";

function changer(){
  ReactDOM.render(<React.StrictMode>
    <Skeleton />
  </React.StrictMode>, document.getElementById('root'));
}

const FormButton = props => (
    <div id="button" class="row">
     <button onClick={changer}>{props.title}</button>
    </div>
    );

export default FormButton;