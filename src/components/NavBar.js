import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from '../logo.png';

function NavBar(){
    const [navBar, setNavBar] = useState(false)
    const [smallLogo, setSmallLogo] = useState(false)
    // const [isSticky, setIsSticky] = useState(false)

    function changeBackground() {
        if (window.scrollY >= 40) {
            setNavBar(true)
            setSmallLogo(true)
        } else {
            setNavBar(false)
            setSmallLogo(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return (
        <nav className={navBar ? "nav-bar active" : "nav-bar"}>
            <img className={smallLogo ? "logo active" : "logo"} src={logo} alt="Krunch" />
            <ul>
                <li>
                    <NavLink exact to="/">
                        <strong>HOME</strong>  
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/exercises">
                    <strong>EXERCISES</strong>  
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/workouts">
                    <strong>WORKOUTS</strong>      
                    </NavLink>
                </li>
               
                <li>
                    <NavLink exact to="/profile">
                    <strong>PROFILE</strong>      
                    </NavLink>
                </li>            
            </ul>
        </nav>
    )
}

export default NavBar;