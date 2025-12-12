import { useSelector } from "react-redux"


const AddToCart = () => {
const cartSelector=useSelector((state)=>state.cart.items)
  return (
    <div className="cart">
    <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
         className="cart-icon" 
         alt="Cart" />

    <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
  </div>
  )
}

export default AddToCart
