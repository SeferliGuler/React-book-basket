import React from 'react'
import "./Navbar.css"
import { FaShoppingBasket } from "react-icons/fa";

function Navbar({list,setShow}) {

  return (
    <div className='navbar'>
        <p className='home' onClick={()=>setShow(true)}>My Home</p>
        <div onClick={()=>setShow(false)}>
        <FaShoppingBasket className='icon'/>
        <span>{list}</span>
        </div>
        
    </div>
  )
}

export default Navbar