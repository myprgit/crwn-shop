import React from 'react';
import './Bag.style.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const bagOnOff = () => {
  var el = document.querySelector(".bagToCheckout");
  var displayVal = getComputedStyle(el).getPropertyValue('display');
  if (displayVal === "none")
  {
    el.style.setProperty('display', "block");
  }
  else
  {
    el.style.setProperty('display', "none");
  }
}

const Bag = () => {
  const state = useSelector(state => state.bag)
  return (
    <div className="showBag">
      <div className="itemBag">
        {
          (() => {
            if (state.length !== 0)
            {
              //functional
              return state.map(item => {
                let data = item[0];
                let count = item[1];
                return(
                <div className="bagItems" key={data.id}>
                  <div className="bagImg" style={{ backgroundImage: `url(${data.imageUrl})` }}>
                  </div>
                  <div className="bagTitlePrice">
                    <div className="bagItemText">
                      {data.name}
                      <br />
                      {count} x {data.price}€
                    </div>
                  </div>
                </div>)
              }
              )
            }
            else
            {
              return <div className="emptyCart">Your cart is empty!</div>
            }
          })()
        }


      </div>
      <div className="goToCheckout">
      <Link to="/checkout">
        <div className="checkoutText" onClick={bagOnOff}>
          GO TO CHECKOUT
        </div>
      </Link>
      </div>
    </div>
  )
}

export default Bag;