import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  return (
    <nav 
    className={ '${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
    }
    >
      <div className= 'w-full flex justify-between itmes-center max-w-7x1 mx-auto'>
        <Link to="/" className = "flex itmes-center gap-2></div>">
          <img src = {logo} alt = "logo" className='w-9 h-9 object contain'></img>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar