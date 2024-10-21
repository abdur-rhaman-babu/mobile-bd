import './Mobile.css'
import  PropTypes  from 'prop-types';
const Mobile = ({mobile, handleAddToCart}) => {
    
    const {brand, image, price} = mobile;
    return (
        <div className='mobile'>
            <h2>Name: {brand}</h2>
            <img src={image} alt="" />
            <p>Price: {price}</p>
            <button 
            className='add-cart'
            onClick={()=>handleAddToCart(mobile)}
            >
            Add to cart
            </button>
        </div>
    );
};

Mobile.propTypes = {
    mobile: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Mobile;