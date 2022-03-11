import React from "react";
import '../Navagation/Nav.scss'
import {
    Link,
    NavLink
  } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return(
            <>
                <ul>
                <li><NavLink to="/" activeClassName="active" exact={true}>
                        Home
                </NavLink></li>
                <li><NavLink to="/todo" activeClassName="active">
                        Todo
                </NavLink></li>
            
                <li><NavLink to="/about" activeClassName="active">
                        About
                </NavLink></li>
                <li><NavLink to="/user" activeClassName="active">
                        User
                </NavLink></li>
                </ul>
            </>
        )
    }
}
export default Nav;