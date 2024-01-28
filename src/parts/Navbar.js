import React, { useState } from 'react'
import Logo from "../assets/uciLogo.png"
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function NavBar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => 
    {
        setOpenLinks(!openLinks)
    }

    return (
        <div class="navbar">

            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />

                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/application"> Application </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/meettheteam"> Meet The Team </Link>
                </div>

            </div>

            <div className="rightSide">

                <Link to="/"> Home </Link>
                <Link to="/application"> Application </Link>
                <Link to="/about"> About </Link>
                <Link to="/meettheteam"> Meet The Team </Link>
            
            
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>

            </div>

        </div>
    )
}

export default NavBar
