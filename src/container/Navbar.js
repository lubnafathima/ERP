import React, { useState } from 'react';
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";

import {
    FaThLarge, 
    FaUserAlt, 
    FaBookOpen, 
    FaCalendarAlt, 
    FaBell, 
    FaBars,
    FaExternalLinkSquareAlt
} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

function Navbar({children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);

    const menuItem = [
        {
            path:"/",
            name:"Dashboard",
            icon:<FaThLarge/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/classroom",
            name:"Classroom",
            icon:<FaBookOpen/>
        },
        {
            path:"/timetable",
            name:"Timetable",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FaBell/>
        },
        {
            path:"/logout", //link back to homepage / signin page
            name:"Logout",
            icon:<FaExternalLinkSquareAlt/>
        }
    ]
  return (
    <div className='container-nav'>
        <div style={{width: isOpen ? "300px" : "50px"}} className='navbar'>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                <FaBars onClick={toggle} />
            </div>
            <div className='section'>
            <img src={logo}  style={{display: isOpen ? "block" : "none"}} className='logo'></img>
            <img src={logo2}  style={{display: isOpen ? "block" : "none"}} className='logo2'></img>
            </div>
            {
                menuItem.map((item, index) => {
                    return <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                })
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Navbar;