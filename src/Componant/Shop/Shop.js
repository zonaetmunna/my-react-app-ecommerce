import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     // state
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);
     const [displayProducts, setDisplayProducts] = useState([]);

     useEffect(() => {
          fetch('./products.JSON')
               .then(res => res.json())
               .then(data => {
                    setProducts(data);
                    setDisplayProducts(data);

               })
     }, [])

     useEffect(() => {
          if (products.length) {
               const savedCart = getStoredCart();
               const storedCart = [];
               for (const key in savedCart) {
                    const addedProduct = products.find(product => product.key === key);
                    if (addedProduct) {
                         const quantity = savedCart[key];
                         addedProduct.quantity = quantity;
                         storedCart.push(addedProduct);
                    }
               }
               setCart(storedCart);
          }
     }, [products])

     // handle add to cart product
     const handleProduct = (product) => {
          const newCart = [...cart, product];
          setCart(newCart);
          // add local storage
          addToDb(product.key);
     }

     // handle search product
     const handleSearch = (event) => {
          const searchText = event.target.value;
          const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
          setDisplayProducts(matchProduct);

     }

     return (
          <div>
               <div className="search-container">
                    <input type="text"
                         onChange={handleSearch}
                         placeholder="search your product" />
               </div>

               <div className="shop-container">
                    <div className="product-container">
                         {
                              displayProducts.map(product => <Product
                                   key={product.key}
                                   product={product}
                                   handleProduct={handleProduct}
                              ></Product>)
                         }
                    </div>

                    <div className="cart-container">
                         <Cart cart={cart}></Cart>
                    </div>

               </div>
          </div>

     );
};

export default Shop;