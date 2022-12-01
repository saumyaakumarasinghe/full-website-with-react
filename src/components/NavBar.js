import React, { useState } from 'react'
import Logo from '../assets/logo.png'                   //Import logo picture 
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);    //State

  const toggleNavBar = () => {
    setOpenLinks(!openLinks)                            //Change current value to the opposite of what it currently is (use !)
  };

  return (
    <div className='navbar'> 

        <div className='leftSide' id={openLinks ? "open" : "close"}> 
            <img src={Logo}/> 
            <div className='hiddenLinks'></div>
        </div>

        <div className='rightSide'>
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact </Link>
          <button onClick={toggleNavBar}>
            <ReorderIcon/>
          </button>
        </div>

    </div>
  )
}

export default NavBar
