import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/carts" exact component={Cart} />
          <Route path="/product/:id" exact component={CartDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
