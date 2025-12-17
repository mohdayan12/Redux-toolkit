

import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"
const Header = () => {
  return (
   <header className="header">
  <div className="logo">ZAYRO</div>

  <nav className="nav-links">
    <Link to={'/'}>Home</Link>
    
     
  </nav>
   <AddToCart />
  
</header> 
      
   
  )
}

export default Header
