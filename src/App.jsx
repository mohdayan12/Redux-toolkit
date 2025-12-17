
import Header from "./Header.jsx"
import Product from "./Product.jsx"
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./Cart.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
     <Routes>
       <Route path='/' element={<Product />} />
       <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
