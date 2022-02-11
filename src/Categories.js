import {useState,useEffect} from "react";
import axios from "axios";
const Categories = () => {
    let [categories, setCategories] = useState([]);
    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res) => {
            setCategories(res.data);
        });
    },[]);
    return(
        <div className="App-cat">
            <h1 className="headOne">Categories</h1>
            {categories.map((val,index) =>{
                return (
                    <div className="Cat-div"><b>{index+1}. {val}</b></div>
                );
            })}
        </div>
    )
}
export default Categories;