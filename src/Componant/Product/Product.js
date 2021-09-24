import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
     const { name, img, price, stock, seller } = props.product;
     const element = <FontAwesomeIcon icon={faShoppingCart} />

     return (
          <div className="product">

               <div>
                    <img src={img} alt="" />

               </div>
               <div >
                    <h3 className='product-name'>{name}</h3>
                    <p><small>by: {seller}</small></p>
                    <p>{stock}</p>
                    <h4>${price}</h4>
                    <button
                         onClick={() => props.handleProduct(props.product)}
                         className="button-regular">{element}add to cart</button>
               </div>

          </div>
     );
};

export default Product;