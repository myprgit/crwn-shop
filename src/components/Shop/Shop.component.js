import React, { Component } from 'react';
import data from "../../data/shop.data";
import Items from "../Items/Items.component";
import "./Shop.style.css";
const dataArr = Object.values(data);

let getFourRandom = (arr) => {
    let loopCount = 4;
    let randomArr = [];
    for (let i = 0; i < loopCount; i++) {
        let rand = arr[Math.floor(Math.random() * arr.length)];
        if (!randomArr.includes(rand)) {
            randomArr.push(rand);
        }
        else {
            loopCount++;
        }

    }
    return randomArr;
}

export class Shop extends Component {

    render() {
        return (
            <div className="collectionContainer">
                {dataArr.map(collection => <div key={collection.id}>
                    <div className="collectionTitle">
                        {collection.title}
                    </div>
                    <div className="collectionItems">
                        <div className="collectionGrid">
                            {getFourRandom(collection.items).map(item =>
                                <div key={item.id}>
                                    <Items item={item}/>
                                </div>
                            )}
                        </div>

                    </div>
                </div>)}
            </div>
        )
    }
}

export default Shop;
