import { useState,useEffect } from "react";
import axios from "axios";
const AllProducts = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setProducts(res.data);
        })
    },[])
    return (
        <div className="App-div">
            <h1>Product Details</h1>
            {products.map((val, index) => {
                return (
                    <div className="divOne">
                        <h3>Product {index+1}</h3>
                        <b>Id : </b>{val.id}<br />
                        <b>Price : </b>{val.price}<br />
                        <b>Description : </b>{val.description}<br />
                    </div>
                )
            })}
        </div>
    )
}
export default AllProducts;