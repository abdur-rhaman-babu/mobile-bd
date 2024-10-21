import { useEffect } from "react";
import { useState } from "react";
import Mobile from "../Mobile/Mobile";
import './Mobiles.css'
import { addToLS, getCartFromLS } from "../../Utils/localStorage";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);
  const [addCart, setAddCart] = useState([])
  useEffect(() => {
    fetch("mobiles.json")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);

  useEffect(()=>{
    console.log(mobiles.length)
    if (mobiles.length){
      const storedCart = getCartFromLS()
      console.log(storedCart)
    }
  },[mobiles])

  const handleAddToCart = mobile =>{
        const newAddCart = [...addCart, mobile]
        setAddCart(newAddCart)
        addToLS(mobile.id)
  }

  return (
    <div>
      <h2>Mobiles: {mobiles.length}</h2>
      <div>
            <h3>Cart: {addCart.length}</h3>
      </div>
      <div className="mobile-container">
        {mobiles.length > 0 &&
          mobiles.map((mobile) => 
          <Mobile key={mobile.id} 
          mobile={mobile} handleAddToCart = {handleAddToCart}
          />)}
      </div>
    </div>
  );
};

export default Mobiles;
