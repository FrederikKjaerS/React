import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Navbar() {
  const [click, setClick] = useState(false)
  return (
    <>
        <nav className="Navbar">
          <div className="navbar-container">
            <Link to='/' className='nabarLogo'> 
            hej
            </Link>
            <div className='menu-icon'>
            </div>
          </div> 
        </nav>
    </>
  )
}

export default Navbar