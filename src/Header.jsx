

import AddToCart from "./AddToCart"
const Header = () => {
  return (
   <header className="header">
  <div className="logo">ZAYRO</div>

  <nav className="nav-links">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
     
  </nav>
   <AddToCart />
  
</header> 
      
   
  )
}

export default Header
