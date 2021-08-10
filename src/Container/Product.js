import React from "react";
import ComputerProducts from "../Data/Data";
import Header from "../Header/Header";
import Items from "./Items";
import "./Product.css";

function Product() {
  console.log(ComputerProducts);
  return (
    <div className="grid-item">
      {ComputerProducts.map((products) => {
        return (
          <div key={products.id}>
            <Items item={products} />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
