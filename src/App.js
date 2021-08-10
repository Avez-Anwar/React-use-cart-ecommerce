import logo from "./logo.svg";
import "./App.css";
import Product from "./Container/Product";
import Items from "./Container/Items";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
