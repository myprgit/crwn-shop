import { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home/Home.component";
import Header from "./components/Header/Header.component";
import Collections from "./components/Collections/Collections.component";
import Shop from "./components/Shop/Shop.component";
import Checkout from "./components/Checkout/Checkout.component";
import Signin from "./components/Signin/Signin.component";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/*" component={Collections} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" component={Signin} />
      </>
    )
  }
}

export default App;
