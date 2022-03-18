import React from 'react'
import About from './About'
import Header from './Header'
import {IoIosMenu} from 'react-icons/io'
import {HiOutlineLockClosed} from 'react-icons/hi'
import {HiPlus} from 'react-icons/hi'
import Form from './Form'
import Tooltip from './Tooltip'



function Nav() {
  return (
    <div>
    <div className='nav-bar'>
      <Header/>
      <div className='nav-side'>
        <About value="Personal"/>
        <About value="Business"/>
        <About value="Developers"/>
        <Form value="Login"><HiOutlineLockClosed/></Form>
        <Form value="Sign Up"><HiPlus/></Form>
        <div className='toggle-bar'><IoIosMenu/></div>
      </div>
    </div>
    <Tooltip/>
    </div>
  )
}

export default Nav
