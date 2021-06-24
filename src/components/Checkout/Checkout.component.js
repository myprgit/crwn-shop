import React from 'react'
import './Checkout.style.css'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { addToBag } from '../../actions/addToBag';
import { deleteFromBag } from '../../actions/deleteFromBag';
import { reduceFromBag } from '../../actions/recudeFromBag';
import {useDispatch} from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  let totalPrice = 0;
  state.forEach(element => {
    let price = element[1] * element[0].price;
    totalPrice += price;
  })
  return (
    <div className="container">
      <div className="tableHead">
        <div className="tableTitle">Product</div>
        <div className="tableTitle">Description</div>
        <div className="tableTitle">Quantity</div>
        <div className="tableTitle">Price</div>
        <div className="tableTitle">Remove</div>
      </div>
      <div className="tableProducts">
        {state.map(item => {
          let data = item[0];
          let count = item[1];
          return (<div className="productWrap" key={data.id}>
            <div className="productImg" style={{ backgroundImage: `url(${data.imageUrl})` }}>

            </div>
            <div className="productDesc">
              <div className="productInner">
                {data.name}
              </div>
            </div>
            <div className="quantity">
              <div className="productInner">
              <FontAwesomeIcon icon={faAngleLeft} onClick={()=> {dispatch(reduceFromBag(item))}}/>  {count}  <FontAwesomeIcon icon={faAngleRight} onClick={()=> {dispatch(addToBag(item))}}/>
              </div>
            </div>
            <div className="price">
              <div className="productInner">
                {data.price}€
              </div>
            </div>
            <div className="remove">
              <div className="productInner">
                <FontAwesomeIcon icon={faTimes} onClick={()=> {dispatch(deleteFromBag(item))}}/>
              </div>
            </div>
          </div>
          )
        })}
      </div>
      <div className="tableTail">
        Total: {totalPrice}€
      </div>
    </div>
  )
}

export default Checkout;