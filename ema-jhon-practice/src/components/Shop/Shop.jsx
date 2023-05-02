// import React from 'react';

import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
// import { addToDb } from '../../utilities/fakedb';

const Shop = () => {

    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])
    
    useEffect(()=>{
        const storedCart = getShoppingCart()
        const savedCart=[]
        for (const id in storedCart) {
            // step-2 get the product by using id
            const addedProduct = products.find(product => product.id === id)
            // console.log('added product ', addedProduct);
            if(addedProduct){
                //step-3 get the quantity 
                const quantity =storedCart[id]
                addedProduct.quantity=quantity
                // step-4 add the added product to the saved cart
                savedCart.push(addedProduct)

            }
             // set the cart
        setCart(savedCart)

        }

    },[products])
    
    let newCart=[]
    const handleCart=(product)=>{
        // get the shopping cart
        const savedCart=getShoppingCart()
        const exists=cart.find(pd=> pd.id === product.id)
        if(!exists){
            newCart=[...cart,product]
        }else{
            product.quantity=exists.quantity + 1 
            const remaining= cart.filter(pd=> pd.id !== exists.id)
            newCart=[...remaining,product]
        }
        
        console.log(savedCart);
        // console.log(product);
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-section'>
            <Products 
            products={products}
            handleCart={handleCart}
            ></Products>
            <Cart 
            cart={cart}
            products={products}
            ></Cart>
           
            
        </div>
    );
};

export default Shop;