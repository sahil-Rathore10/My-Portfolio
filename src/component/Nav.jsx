import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
 <>
 <div className='flex justify-between items-center px-6 py-4 relative bg-white'>
    <div className="logo text-black text-5xl font-extrabold font-['Heading now trial']"><h1>Sahil.</h1></div>
    <div className='right-nav flex items-center gap-16'>
          <NavLink
  to="/"
  className={({ isActive }) =>
    `relative text-xl text-black transition-all duration-300 transform ${
      isActive ? 'scale-105 opacity-100 font-medium' : 'scale-100 opacity-80'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } after:origin-left after:transition-transform after:duration-300`
  }
>
Home
</NavLink>
   <NavLink
  to="/projects"
  className={({ isActive }) =>
    `relative text-xl text-black transition-all duration-300 transform ${
      isActive ? 'scale-105 opacity-100 font-medium' : 'scale-100 opacity-80'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } after:origin-left after:transition-transform after:duration-300`
  }
>
  Projects
</NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
     `relative text-xl text-black transition-all duration-300 transform ${
      isActive ? 'scale-105 opacity-100 font-medium' : 'scale-100 opacity-80'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } after:origin-left after:transition-transform after:duration-300`
    }
  >
    About
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `relative text-xl text-black transition-all duration-300 transform ${
      isActive ? 'scale-105 opacity-100 font-medium' : 'scale-100 opacity-80'
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } after:origin-left after:transition-transform after:duration-300`
    }
  >
    Contact
  </NavLink>

  <NavLink
    to="/resume"
    className={({ isActive }) =>
     isActive ? "bg-white text-xl text-black border-2 px-4 py-2 rounded font-medium" : "bg-black text-xl text-white px-4 py-2 rounded"
    }
  >
    My Resume <i class="fa-solid fa-download"></i>
  </NavLink>
    </div>
 </div>
 </>
  )
}

export default Nav