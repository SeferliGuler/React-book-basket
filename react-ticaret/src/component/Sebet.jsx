import React, { useState,useEffect } from 'react'
import "./Cart.css"

function Sebet({liste, setList,handleChange}) {

  const [caunt, setCaunt]= useState(0)
  const [res, setRes]= useState(0)
    
   const Remove =(id)=>{
    const arr= liste.filter((list)=> list.id !== id)
    setList(arr)
    }

    useEffect(() => {
      let total = 0;
      liste.forEach((item) => {
        total += item.amount * item.price;
      });
      setRes(total);
    }, [caunt, liste]);

 
  return (
    <div className='sbt'>
    {
    liste.map((liste)=>(
    <div className='sebetim'>
    <div>
    <img src={liste.img} alt="" />
    </div>
    <div className='par'>
    <p>{liste.title}</p>
    <p>{liste.price} AZN</p>
    </div>
    <div className='buttonlar'>
        <div className="sayilar">
        <button onClick={()=>{handleChange(liste,+1)}} className='sayi'>+</button>
        <button className='sayi'>{liste.amount}</button>
        <button onClick={()=>{handleChange(liste,-1)}} className='sayi'>-</button>
        </div>
        
     <div>
     <button className='remove' onClick={()=>Remove(liste.id)}>Remove</button>
    </div>
    </div>
   </div>  
    ))
    }

    <div>Sum: {res} AZN</div>
    </div>
  )
}

export default Sebet