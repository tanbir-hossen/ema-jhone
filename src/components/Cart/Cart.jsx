import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart optino 1 //
    // const {cart} = props option2 //
    console.log(cart)
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price
        totalShipping= totalShipping + product.shipping;
    } 
    let tax = total*7/100;
    const grandtotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total} </p>
                <p>Shipping: ${totalShipping.toFixed(2)} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandtotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
