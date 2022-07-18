import React from "react";
import logo_mitaoe from './logo-mitaoe.png';
import boy from './boy.png';
import signup from './Navbar_login';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <header>
    <nav className="navbar">
    <img src={logo_mitaoe} className="logo" alt="logo" />
        <ul>
            <div className="home"><a href="#">Overview</a></div>
            <div className="home"><a href="#">Feature</a></div>
            <div className="home"><a href="#">About</a></div>

            <div div className="signup"><input type="button"  value="signup"/><Link to="/signup"></Link></div>
            
            <div className="english"><a href="#"></a>English</div>
            
            
        </ul>
    </nav>
</header>
<div className="rectangle">
            <img  className="boy" src={boy} alt="boy"/>
            <h2 className="refocus">ReFocus <br></br></h2>
            <h1 className="concentration">Enhance your <br></br>
                concentration</h1>
                <h4 className="learner">Hellow learner</h4> <br></br>
                <div className="login"><input type="button"  value="Login"/><a href=""/></div>
        </div>
        </>
    
  );
}
