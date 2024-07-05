import list from "../data"
import Cart from './Cart.jsx'
import "./Cart.css"
import { useState } from "react"

function Amazon({ListEkle}) {
  
  return (
    <div className='amazon'>
    {
    list.map((item)=>{
       return <Cart key={item.id} item={item} ListEkle={ListEkle}/>
    })
    }
    </div>
  )
}

export default Amazon