import { useState,useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
const EcommerceApp = (props) => {
    let [products, setProducts] = useState([]);
    let [rating, setRating] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.id}`)
        .then((res) => {
            setProducts(res.data);
            setRating(res.data.rating);
        })
    },[])
    return (
        <div className="App-div">
            <h1>Welcome to Cart</h1>
            <div className="divOne">
                <h3>Item</h3>
                <div className="App-image">
                    <img src = {products.image} />
                </div><br />
                <b>Id : </b>{products.id}<br />
                <b>Title : </b>{products.title}<br />
                <b>Price : </b>{products.price}<br />
                <b>Description : </b>{products.description}<br />
                <b>Category : </b>{products.category}<br />
                <b>Rating</b><br/>
                <div className="divTwo">
                    <b>Rate : </b>{rating.rate}<br/>
                    <b>Count : </b>{rating.count}<br />
                </div>
            </div>        
        </div>
    )
}
export default EcommerceApp;