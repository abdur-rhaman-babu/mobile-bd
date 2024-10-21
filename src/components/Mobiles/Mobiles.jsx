import { useEffect } from "react";
import { useState } from "react";
import Mobile from "../Mobile/Mobile";
import "./Mobiles.css";
import { addToLS, getCartFromLS, removeCartFromLS } from "../../Utils/localStorage";
import Cart from "../Cart/Cart";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);
  const [addCart, setAddCart] = useState([]);
  useEffect(() => {
    fetch("mobiles.json")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);

  useEffect(() => {
    // console.log(mobiles.length)
    if (mobiles.length) {
      const storedCart = getCartFromLS();

      const savedCart = [];
      for (const id of storedCart) {
        const mobile = mobiles.find((mobile) => mobile.id === id);
        if (mobile) {
          savedCart.push(mobile);
        }
      }
      setAddCart(savedCart);
    }
  }, [mobiles]);

  const handleAddToCart = (mobile) => {
    const newAddCart = [...addCart, mobile];
    setAddCart(newAddCart);
    addToLS(mobile.id);
  };

  const handleRemoveFromCart = (id) =>{
      const filteredCart = addCart.filter((cart)=> cart.id !==id)
      setAddCart(filteredCart)
      removeCartFromLS(id)
  }

  return (
    <div>
      <h2>Mobiles: {mobiles.length}</h2>
      <div>
        <h3>Cart: {addCart.length}</h3>
        <div className="cart-container">
          {addCart.map((cart) => (
            <Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
          ))}
        </div>
      </div>
      <div className="mobile-container">
        {mobiles.length > 0 &&
          mobiles.map((mobile) => (
            <Mobile
              key={mobile.id}
              mobile={mobile}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Mobiles;
