import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem, removeItem } from './redux/slice.js'

const Cart = () => {
 const dispatch=useDispatch() 

const cartSelector=useSelector((state)=>state.cart.items)
 const onhandlesubmit=()=>{
    localStorage.clear()
    alert("Your order is placed");
    dispatch(clearItem())
 }

  return (
  
    <div className='container'>
    <h1>Total cart Item:{cartSelector.length}</h1>
    <h1>TotalPrice:{(cartSelector.reduce((sum,item)=>sum+item.price,0).toFixed(2))}</h1>
     <h1 onClick={()=>onhandlesubmit()} style={{background:'blue',padding:'4px',borderRadius:6,cursor:'pointer'}}>Place Order</h1>
      
     <div className='heading'>
     {
      cartSelector.length>0 ? cartSelector.map(item=>(
      <div className='cartItem' key={item.id}>
     <img src={item.thumbnail} />
     <h4>{item.title}</h4>
     <p>{item.price}</p>
     <button onClick={()=>dispatch(removeItem(item))} className='remove-cart-btn'>delete from cart</button>
     </div>
      )):null}

     </div>
      
    </div>
  )
}

export default Cart
