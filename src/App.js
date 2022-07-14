import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import LoginForm from "./components/LoginForm";
import Login from "./Pages/login"
import Skeleton from "./Pages/Skeleton";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Skeleton" element={<Skeleton/>}/>
      </Routes>
    </Router>
  )

}
export default App