const getCartFromLS = () =>{
    const storedCart = localStorage.getItem('cart')
    if ( storedCart ){
        return JSON.parse(storedCart)
    }
    return []
}

const setCartToLS = (cart) =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLS = (id) =>{
    const cart = getCartFromLS()
    cart.push(id)
    setCartToLS(cart)
}

const removeCartFromLS = (id) =>{
    const carts = getCartFromLS()
    const remaining = carts.filter((cart)=> cart !== id)
    setCartToLS(remaining)
}

export {addToLS, getCartFromLS, removeCartFromLS}