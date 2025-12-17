import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const AddToCart = () => {
const cartSelector=useSelector((state)=>state.cart.items)
  return (
    <div className="cart">
    <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
         className="cart-icon" 
         alt="Cart" />

    <Link to={'/cart'}><span className="cart-count">{cartSelector.length?cartSelector.length:0}</span></Link>
  </div>
  )
}

export default AddToCart
