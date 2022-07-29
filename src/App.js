import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CartDetails from "./components/CartDetails";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Signin/Login"
import AccessoriesListing from "./components/AccessoriesListing";
import './styles.scss'
import MensList from "./components/MensList";
import WomenListing from "./components/WomenListing";
import JeweleryListing from "./components/JeweleryListing";


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <div className="container__wrapper">
            <Route path="/" exact component={Product} />
            <Route path="/carts" exact component={Cart} />
            <Route path="/product/:id" exact component={CartDetails} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Signin" exact component={Login} />
            <Route path="/Men" exact component={MensList} />
            <Route path="/Women" exact component={WomenListing} />
            <Route path="/Accessories" exact component={AccessoriesListing} />
            <Route path="/Smart Gear" exact component={JeweleryListing} />
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
