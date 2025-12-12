import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

const cartSelector=useSelector((state)=>state.cart.items)

  return (
    <div className='container'>
    {
    cartSelector.map(item=>(
     <div className='cartItem' key={item.id}>
     <img src={item.thumbnail} />
     <h4>{item.title}</h4>
     <p>{item.price}</p>
     <button className='remove-cart-btn'>delete from cart</button>
     </div>
    ))
    }
      
    </div>
  )
}

export default Cart
