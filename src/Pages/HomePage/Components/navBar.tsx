import React from "react";
import  '../CSS/navBarCss.css';
 export default function NavBar()
 {
    return(
        <div className="navbar">
            <div className="navbar_logo">
            <h1  style={{color:"white"}}>Prabin <span style={{color:"#0096a6"}}>Silwal</span></h1>
      
            </div>
            <div className="navbar_items">
               <ul> 
                <li>Projects</li>
                <li>Designs</li>
                <li>About Me</li>
                <li>Resume</li>
                <li>Contact</li>
                </ul>
            </div>
        </div>
    
    );
 }