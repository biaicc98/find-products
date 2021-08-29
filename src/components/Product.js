import React from "react";
import {Link } from "react-router-dom"
const APIKEY = "a86cc456e8084db3ab216291254abcc4";

class Product extends React.Component {
    state = {
        activeProduct: []
    }
    // componentdidmout happens when this component gets loaded/mounted on the browser
    componentDidMount = async () => {
        const title = this.props.location.state.product;
        // const productId= this.props.match.params.id;

        // const req= await fetch(`https://api.spoonacular.com/food/ingredients/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.`) ;
        const req = await fetch(`https://api.spoonacular.com/food/products/search?query=${title}&apiKey=${APIKEY}`);
        const res = await req.json();
        // 

        this.setState({ activeProduct: res.products[0] })

        console.log(this.state.activeProduct)



    }


    render() {
        console.log(this.props)
        return (
            //se existir produto
             this.state.activeProduct ?
            <div className="product-container">
               <img src={this.state.activeProduct.image} alt={this.state.activeProduct.title} />
                <p>{this.state.activeProduct.title}</p> 
                <button className="buttonCustom"><Link to="/" className="link-styling">Go home</Link></button>
                </div>
            //se nao existir producto
            : <div className="product-container"><p className="no-product-h1">Product not found!</p>
                            <button className="buttonCustom"><Link to="/" className="link-styling">Go home</Link></button>
</div>
        
            )
    }
}

export default Product;