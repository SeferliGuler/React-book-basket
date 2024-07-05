import React from 'react'
import "./Cart.css"

function Cart({item, ListEkle}) {
 const {id,title,amount,img,price} = item;

  return (
    <div className='cart'>
     <img src={img} />
     <p className='title'>{title}</p>
     <p className='price'>{price} AZN</p>
     <button onClick={()=>ListEkle(item)} >Add to Basket</button>
    </div>   
  )
}

export default Cart