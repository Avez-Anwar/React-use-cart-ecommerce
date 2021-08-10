import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import "./Cart.css";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2>Your cart is empty</h2>;
  return (
    <div>
      <h1>
        Cart({totalUniqueItems}) totalItems:({totalItems})
      </h1>
      <ul>
        <div>
          {items.map((item, index) => {
            return (
              <div key={index} className="card cart-card">
                {item.quantity}x{item.name}
                <img src={item.image} alt="" />
                <b> ₹{item.price}</b>
                {item.decs}
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>
                  Remove Items
                </button>
              </div>
            );
          })}
        </div>
      </ul>

      <h2>Total Price:₹ {cartTotal}</h2>
      <button className="delete-button" onClick={() => emptyCart()}>
        Delete Item
      </button>
    </div>
  );
}

export default Cart;
