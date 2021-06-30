import "./Header.style.css";
import logo from "../../algebra_crown.svg";
import bag from "../../shopping-bag.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Bag from "../Bag/Bag.component";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase";


const bagOnOff = () => {
  var el = document.querySelector(".bagToCheckout");
  var displayVal = getComputedStyle(el).getPropertyValue('display');
  if (displayVal === "none") {
    el.style.setProperty('display', "block");
  }
  else {
    el.style.setProperty('display', "none");
  }
}

const Header = ({ cuser }) => {
  const state = useSelector(state => state.bag)
  let total = 0;
  state.forEach(element => {
    total += element[1];
  });
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>
      <div className="right">
        <Link to="/shop">
          <div className="rightText">
            ALGEBRA SHOP
          </div>
        </Link>
        {cuser ? (

          <Link onClick={() => auth.signOut()} to="">
            <div className="rightText">
              SIGN OUT
            </div>
          </Link>
        ) :
          (
            <Link to="/signin">
              <div className="rightText">
                SIGN IN
              </div>
            </Link>
          )
        }

        <div className="bag" onClick={bagOnOff} style={{ backgroundImage: `url(${bag})` }}>
          <div className="itemCount">{total}</div>
        </div>
      </div>
      <div className="bagToCheckout">
        <Bag />
      </div>
    </div>
  )
}
const mapStateToProps = ({ user: { cuser } }) => ({
  cuser
});

export default connect(mapStateToProps)(Header);