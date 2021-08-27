import React from "react";

const Products = props => (

    <div>
        {props.products.map( product =>{
                return (
                  <div className="productCard" key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <p >{product.title}</p>
                  
                  
                  </div>

                )
              } )}
    </div>

);

export default Products