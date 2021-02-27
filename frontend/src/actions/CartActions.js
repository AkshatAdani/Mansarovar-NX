import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants";

export const addToCart = (productID, qty) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productID}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // to store the product in the cart.
}
export const removeFromCart = (productID) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productID});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

        
        