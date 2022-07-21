import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Signin/Login"
// import Accessories from "./components/Accessories/Accessories";
import './styles.scss'


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <div className="container__wrapper">
            <Route path="/"  component={Product} />
            <Route path="/carts" exact component={Cart} />
            <Route path="/product/:id" exact component={CartDetails} />
            <Route path="/SignUp"  component={SignUp} />
            <Route path="/Signin"  component={Login} />
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
