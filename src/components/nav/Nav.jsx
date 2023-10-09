import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen} from 'react-icons/ai'
import {BsBookshelf} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BsBookshelf /></a>
      <a href="#portfolio"><AiOutlineFolderOpen /></a>
      <a href="#contact"><TiContacts /></a>
    </nav>
  )
}

export default Nav