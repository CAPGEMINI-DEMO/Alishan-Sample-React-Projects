import React from 'react'
import { FaFacebook,FaHome,FaUsers, FaFontAwesomeFlag, FaGamepad, FaVideo, FaPlus, FaCaretDown, FaBell } from "react-icons/fa";
function Header() {
  return (
    <div className='header'>
        <div className='hleft'>
            <div className='hleftlogo'><FaFacebook className='hlogo'/></div>
            <div className='hsearch'><input type="text" placeholder ="Search" className='hbar'/></div>

        </div>
        <div className='hcenter'>
            <FaHome className='hicons'/>
            <FaFontAwesomeFlag className='hicons'/>
            <FaVideo className='hicons'/>
            <FaUsers className='hicons'/>
            <FaGamepad className='hicons'/>
        </div>
        <div className='hlast'>
            <span className='hlastpart'>
                <FaPlus/>
            </span>
            <span className='hlastpart'>
                <FaBell/>
            </span>
            <span className='hlastpart'>
                <FaCaretDown/>
            </span>
        </div>

    </div>
  )
}

export default Header