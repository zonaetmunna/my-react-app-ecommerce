import React from 'react';
import './Cart.css';

const Cart = (props) => {
     const { cart } = props;
     /* const total = cart.reduce((privius, product) => privius + product.price, 0); */
     let totalQuantity = 0;
     let total = 0;
     for (const product of cart) {
          if (!product.quantity) {
               product.quantity = 1;
          }
          total = total + product.price * product.quantity;
          totalQuantity = totalQuantity + product.quantity;
     }

     const shipping = total > 0 ? 15 : 0;
     const tax = (total + shipping) * 10;
     const grandTotal = total + shipping + tax;

     return (
          <div>
               <h3>order summery</h3>
               <h5>items ordered: {totalQuantity}</h5>
               <br />
               <p>total: {total.toFixed(2)}</p>
               <p>shipping:{shipping}</p>
               <p>tax: {tax.toFixed(2)}</p>
               <p>Grand Total: {grandTotal.toFixed(2)}</p>


          </div>
     );
};

export default Cart;