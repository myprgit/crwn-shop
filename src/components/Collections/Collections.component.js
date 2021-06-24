import data from "../../data/shop.data";
import "./Collections.style.css"
import Items from "../Items/Items.component";
import Home from "../Home/Home.component";


function Collections (props) {
        let path = props.location.pathname;
        let collectionPath = /[^/]*$/.exec(path)[0];
        if (data[collectionPath] === undefined)
        {
            return <Home />
        }
        return (
            <>
                <h1 className="itemsTitle">{data[collectionPath].title}</h1>
                <div className="itemContainer">
                    {data[collectionPath].items.map(item =>
                        <Items key={item.id} item={item} />
                    )}
                </div>
            </>
        )
}

export default Collections;