import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
   let price = 0; 
   let shippingCharge = 0;
    for (const item of cart) {
        console.log(item);
        price += item.price ;
        shippingCharge += item.shipping; 
    }
    const tax = parseFloat(((price / 100)*20).toFixed(2))
    return (
        <div className="cart">
            <h5 style={{textAlign: 'center', marginBottom: '20px'}}>order summery</h5>
            <h6>selected items:{cart.length}</h6>
            <h6>Total Price: ${price}</h6>
            <h6>Total Shipping charges:${shippingCharge}</h6>
            <h6>Tax:${tax}</h6>
            <h5>Grand Total:${(price+shippingCharge+tax).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;