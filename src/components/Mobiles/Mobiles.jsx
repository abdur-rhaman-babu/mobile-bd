import { useEffect } from "react";
import { useState } from "react";
import Mobile from "../Mobile/Mobile";
import './Mobiles.css'
const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch("mobiles.json")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);
  return (
    <div>
      <h2>Mobiles: {mobiles.length}</h2>
      <div className="mobile-container">
        {mobiles.length > 0 &&
          mobiles.map((mobile) => 
          <Mobile key={mobile.id} 
          mobile={mobile} 
          />)}
      </div>
    </div>
  );
};

export default Mobiles;
