import { useDispatch } from "react-redux"
import { clearItem } from "./redux/slice.js"
import Header from "./Header"
import Product from "./Product"
import './app.css'

function App() {
  const dispatch=useDispatch()

  return (
    <>
    <Header />
    <button onClick={()=>dispatch(clearItem())} className="add-cart-btn btn">Clear cart</button>
     <Product /> 
    </>
  )
}

export default App
