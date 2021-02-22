import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';
 
export default function CartScreen(props){
    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const qty = props.location.search
                ? Number(props.location.search.split('=')[1])
                : 1;

    useEffect(()=>{
        if(productID){
            dispatch(addToCart(productID, qty));
        }

    }, [dispatch, productID, qty]);           
    return(
        <div>
            <h1>Cart Screen</h1>
            <p>Add to Cart: ProductID: {productID} Qty: {qty}</p>
        </div>
    )
}