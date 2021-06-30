import { Component } from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import Home from "./components/Home/Home.component";
import Header from "./components/Header/Header.component";
import Collections from "./components/Collections/Collections.component";
import Shop from "./components/Shop/Shop.component";
import Checkout from "./components/Checkout/Checkout.component";
import Signin from "./components/Signin/Signin.component";
import { auth, createUserProfileDoc } from "./firebase/firebase";
import { signinAction } from "./actions/signinAction";
import { connect } from "react-redux";


// componentdidmount -> auth.onauthstateChanged
// componentwillmount
// componentwillunmount -> unsubscribe


class App extends Component {

  DeAuth = null;

  componentDidMount() {
    const { signinAction } = this.props;

    this.DeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userReference = await createUserProfileDoc(userAuth);
        userReference.onSnapshot((snapShot) => {
          signinAction({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      signinAction(userAuth);
    });
  }
  componentWillUnmount() {
    this.DeAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/*" component={Collections} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/signin"
              render={() =>
                this.props.cuser ? <Redirect to="/" /> : <Signin />
              } />
      </>
    )
  }
}

const mapStateToProps = ({ user: { cuser } }) => ({
  cuser
});

const mapDispatchToProps = (dispatch) => ({
  signinAction: (user) => dispatch(signinAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
