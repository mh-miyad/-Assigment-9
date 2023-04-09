import { Button, Navbar } from 'flowbite-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
 import './nav.css'
 import Logo from "../../assets/head-hunting.png"

const NavbarComponent = () => {
  return (
    <div className='lg:mx-40'>
      <nav className=' container  mx-auto'>
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="/">
    
    
        <img src={Logo} alt=""  className='w-6 mx-3'/> 
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
     Dream Job
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className='bg-btn'>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    

   <NavLink  className={'p-2  checked:text-green-500'} to={'/satistic'}>Statistics</NavLink>
   <NavLink  className={'p-2  checked:text-green-500'} to={'/applied-Jobs'}>Applied Jobs</NavLink>
   <NavLink  className={'p-2  checked:text-green-500'} to={'/blog'}>Blog</NavLink>
  
  </Navbar.Collapse>
</Navbar>
      </nav>
    </div>
  )
}

export default NavbarComponent