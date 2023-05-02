// import React from 'react';
// import { getShoppingCart } from '../../utilities/fakedb';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props
    let quantity=0
    let totalPrice=0
    let shippingChage=0
    for(const  product of cart){
        totalPrice=totalPrice + product.price * product.quantity
        shippingChage=shippingChage + product.shipping
        quantity=quantity + product.quantity 
    }
    const tax=totalPrice *7/100
    const grandTotal=totalPrice + shippingChage + tax 

    return (
        <div className="cart">
            <h3>Order summary</h3>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total Shipping Charge: $ {shippingChage} </p>
            <p>Tax : $ {tax} </p>
            <h4>Grand Total: $ {Math.round(grandTotal)}</h4>
            
        </div>
    );
};

export default Cart;