import React,{Component} from "react";
import './header.css'
function Header(props){
 return(
 <div className="header">

     <div className="title">
     <h1>{props.title}</h1>
     </div>
   
    <div className="image">
    <img src={props.image}/>
    </div>
 </div>
 
 )
}

export default Header;