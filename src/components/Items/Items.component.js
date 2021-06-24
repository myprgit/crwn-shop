import React from 'react'
import './Items.style.css'
import {useDispatch} from "react-redux";
import { addToBag } from '../../actions/addToBag';
import { useSelector } from "react-redux";

const Items = ({item}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    return (
        <div key={item.id}>
            <div className="itemImg" style={{backgroundImage: `url(${item.imageUrl})`}}>
            <div className="addToCard">
                <div className="addToCardText" onClick={()=> {dispatch(addToBag([item,1]))}}>
                ADD TO CARD
                </div>
                
            </div>
            </div>
            <div className="itemTexts">
                {item.name}
                <div className="price">
                    {item.price}€
                </div>
            </div>
            
        </div>
    )
}


export default Items;

