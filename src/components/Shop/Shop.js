import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const [cart, setCart] = useState([]);
    const cartHandler =id =>{
        const newCart =[...cart, id];
        setCart(newCart)
        
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row product-container">
                        {
                            products.map(product =><Product key={product.id} handler={cartHandler} product={product}></Product>)
                        }
                     </div>
                </div>
                <div className="col-3">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;