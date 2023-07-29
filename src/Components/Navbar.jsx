import "./Navbar.css";
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    // Hamburger State
    const [hamburgericonClick, setHamburgerIconClick] = useState(false);
    const iconeHanlder = ()=> setHamburgerIconClick(!hamburgericonClick);
    // NavColor Change state
    const [navColor, setNavColor] =useState(false)
    const NavColorChange =()=>{
        if(window.scrollY >=100){
            setNavColor(true)
        }else{
            setNavColor(false)
        }
    }
    window.addEventListener("scroll", NavColorChange);
  return (
    <div className={navColor ? "header headerBg":"header"} >
        <h2><Link to={"/"}>ZR.</Link></h2>
        <ul className={hamburgericonClick?"nav-menu active":"nav-menu"}>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            <li>
                <Link to={"/project"}>Project</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <div className="hmburger" onClick={iconeHanlder}>
            {hamburgericonClick?(<FaTimes size={20} style={{color: "#fff"}}/>)
            :(<FaBars size={20} style={{color: "#fff"}}/>)}</div>
    </div>
  )
}

export default Navbar