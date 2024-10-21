/* eslint-disable react/prop-types */
import './Mobile.css'
const Mobile = ({mobile}) => {
    console.log(mobile)
    const {brand, image, price} = mobile;
    return (
        <div className='mobile'>
            <h2>Name: {brand}</h2>
            <img src={image} alt="" />
            <p>Price: {price}</p>
            <button className='add-cart'>Add to cart</button>
        </div>
    );
};

export default Mobile;