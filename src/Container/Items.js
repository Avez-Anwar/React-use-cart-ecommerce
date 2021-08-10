import React from "react";
import "./Items.css";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";

function Items(props) {
  const { addItem } = useCart();

  console.log(props.item);
  return (
    <div>
      <div className="main__container">
        <div className="card">
          <img src={props.item.image} alt="Avatar" />
          <h4>{props.item.name}</h4>
          <h4>₹{props.item.price}</h4>
          <button onClick={() => addItem(props.item)}>Add to Cart</button>
          <p>{props.item.decs}</p>
        </div>
      </div>
    </div>
  );
}

export default Items;
