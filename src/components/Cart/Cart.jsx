import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    // console.log(cart)
    const {image} = cart;
    return (
        <div className="cart">
            <img src={image} alt="" />
            <button 
            className='remove-btn'
            onClick={()=> handleRemoveFromCart(cart.id)}
            >
            Remove
            </button>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;