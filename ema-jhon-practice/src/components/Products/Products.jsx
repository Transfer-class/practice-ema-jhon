// import React from 'react';
import './Products.css'
import Product from "../Product/Product";

// =======Productsssssssssssss===========
const Products = (props) => {
    // console.log(props.products);
    const{products,handleCart}=props
   
   
    return (
        <div className="product-section">
            {
                products.map(product=>
                     <Product 
                     product={product}
                     handleCart={handleCart}
                     key={product.id}
                     ></Product> )
            }
            
        </div>
    );
};

export default Products;