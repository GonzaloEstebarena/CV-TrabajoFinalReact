import React from 'react'
import {NavLink} from 'react-router-dom'
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink className='navlink'to='' activeclassname={"active"}>Home</NavLink>
        <NavLink className='navlink' to='joblife' activeclassname={"active"}>Joblife</NavLink>
        <NavLink className='navlink' to='moremore' activeclassname={"active"}>Moremore</NavLink>
        <NavLink className='navlink' to='contact' activeclassname={"active"}>Contact</NavLink>
        <NavLink className='navlink'  to='aboutme' activeclassname={"active"}>AboutMe</NavLink>
        <NavLink className='navlink' to='info' activeclassname={"active"}>Info</NavLink>
    </header>
  )
}

export default Navbar
