import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { CartProvider, useCart } from "react-use-cart";

import "./Header.css";

function Header() {
  const { totalItems } = useCart();
  return (
    <nav className="nav-div">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/cart">
        <Badge badgeContent={totalItems} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </nav>
  );
}

export default Header;
