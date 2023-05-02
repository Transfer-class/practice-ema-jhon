// import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const handleCart=props.handleCart
    const { img, name, price, seller, ratings } = props.product
    // console.log(img);


    return (
        <div className='single-product'>
            <div className="product">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Manufacturee: {seller}</small></p>
                <p><small>Manufacturee: <b>{seller}</b> </small></p>
                <p><small>Ratings: <b>{ratings}</b> stars</small></p>

            </div>
            <button onClick={()=> handleCart(props.product)}>Add To Cart</button>

        </div>
    );
};

export default Product;