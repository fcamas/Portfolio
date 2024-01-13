import React from 'react'
import { Link} from 'react-router-dom'
import { styles } from '../styles'
import { navLinks} from '../constants'
import { logo,  menu, close, cat,catLogo1, mainCat} from '../assets'



const Navbar = () => {
  return (
    <nav 
    className={ '${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
    }
    >
      <div className= 'w-full flex justify-between itmes-center max-w-7x1 mx-auto'>
        <Link to="/" 
              className = "flex itmes-center gap-2"
              onClick={() => {
                setActive(false);
              }}>
          <img src = {mainCat} alt = "catlogo2" className='w-9 h-9 object contain'></img>
        <p className='text-white text-[18px] font-bold cursor-pointer'>Fredy <span className='sm.block hidden'> Mobile Engineering </span></p>
        </Link>
        <ul className = 'list-none hidden sm:felx flex-raw gap-10'>
          {navLinks.map((Link) => (
            <li>
              <a href = {'#${Link.id}'} >
                {Link.title}  
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar