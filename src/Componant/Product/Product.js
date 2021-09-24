import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
     const { name, img, price, stock, seller, star } = props.product;
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
                    <Rating
                         initialRating={star}
                         emptySymbol='far fa-star icon'
                         fullSymbol='fas fa-star icon'
                         readonly></Rating>
                    <br />
                    <button
                         onClick={() => props.handleProduct(props.product)}
                         className="button-regular">{element}add to cart</button>
               </div>

          </div>
     );
};

export default Product;