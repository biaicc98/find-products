import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

const Products = props => (

    <div className="wrapper">
        {props.products.map( product =>{
                return (
                  <div className="productCard" key={product.id}>
                    <img className="imgProduct" src={product.image} alt={product.title}/>
                    <p className="productTitle">{ product.title.length < 20 ?   `${product.title}` : `${product.title.substring(0,20)}...`}</p>
                    <button className="viewProduct"><Link to={{pathname:`/product/${product.id}`, state:{ product: product.title}}} className="link-styling">View Product</Link></button>
                  
                  
                  </div>

                )
              } )}
    </div>

);

export default Products