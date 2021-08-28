import React from "react";
import '../App.css';

const Products = props => (

    <div className="wrapper">
        {props.products.map( product =>{
                return (
                  <div className="productCard" key={product.id}>
                    <img className="imgProduct" src={product.image} alt={product.title}/>
                    <p className="productTitle">{ product.title.length < 30 ?   `${product.title}` : `${product.title.substring(0,30)}...`}</p>
                    <button className="viewProduct">View Product</button>
                  
                  
                  </div>

                )
              } )}
    </div>

);

export default Products