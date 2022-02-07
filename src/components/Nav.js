import React,{Component} from "react";
import './nav.css';
function Nav(props){
return(
    
    <nav>
        <a href="">{props.item1}</a>
        <a href="">{props.item2}</a>
        <a href="">{props.item3}</a>
        <a href="">{props.item4}</a>
    </nav>
 
)
}
export default Nav;
