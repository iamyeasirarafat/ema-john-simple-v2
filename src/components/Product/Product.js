import React from 'react';
import './Product.css'

const Product = ({product, handler}) => {
    const {img, name, price, ratings, seller,  } = product;
    
    return (
        <div className="col-lg-4 gx-5 col-md-6 col-12">
            <div className="product ">
            <img src={img} alt="" />
            <div className="product-info">
                <h5>{name}</h5>
                <h6>price: ${price}</h6>
                <p className="rate">rate: {ratings} starts</p>
                <p>manufecture: {seller}</p>
            </div>
            <button onClick={() =>{handler(product)}} className="btn ">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;