import React from "react";
import ReactDOM from "react-dom"
import Skeleton from "../Skeleton";



const FormButton = props => (
    <div id="button" class="row">
     <a href="detection.html"><button >{props.title}</button></a>
    </div>
    );

export default FormButton;