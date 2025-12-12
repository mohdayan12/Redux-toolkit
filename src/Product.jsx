import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice.js";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice.js";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.productSlice.items);
const cartSelector=useSelector((state)=>state.cart.items)


  return (
    <div className="grid">
      {productSelector.length &&
        productSelector.map((product) => (
          <div key={product.id} className="cart-one">
            <img src={product.thumbnail} />
            <h4>{product.title}</h4>
            <p>{product.brand}</p>
            <h2>$ {product.price}</h2>
            <p>{product.rating}</p>
            {
             cartSelector.find(item=>item.id===product.id)?
              <button onClick={()=>dispatch(removeItem(product))}  className="remove-cart-btn  ">
              Remove from Cart</button>:
               <button onClick={()=>dispatch(addItem(product))} className="add-cart-btn">Add to Cart</button>
            }
           
          </div>
        ))}
    </div>
  );
};

export default Product;
