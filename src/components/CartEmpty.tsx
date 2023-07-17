import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from '../assets/img/empty-cart.png'
const CartEmpty:React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty😕
      </h2>
      <p>
        Its possible that you havent ordered pizza
        <br />
       Return to the main page to order a  pizza
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
