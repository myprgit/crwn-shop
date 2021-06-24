import data from "../../data/home.data";
import { Component } from "react";
import "./Home.style.css"
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
      return(
        <div className="container">
          {data.map(item => (
            <Link to = {item.linkUrl} key={item.id}>
            <div className="wrapper" id={"x"+item.id}>
                <div className="items"  style={{backgroundImage: `url(${item.imageUrl}), linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))`,backgroundRepeat: `no-repeat`,backgroundSize: `100%`, backgroundPosition: `center`}}>
                    
                    <div className="inner" >
                        <span className="title">{(item.title.toUpperCase())}</span>
                        <br />
                        <span className="shopNow">SHOP NOW</span>
                    </div>
                </div>
            </div>
            </Link>
          ))}
        </div>
      )
    }
  }
  
export default Home;