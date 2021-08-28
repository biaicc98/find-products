import React from "react";

const API_KEY="442c401e11a142a796509f00242e9e3a";

class Product extends React.Component {
    state = {
        activeProduct: []
    }
    // componentdidmout happens when this component gets loaded/mounted on the browser
    componentDidMount = async () => {
        const title= this.props.location.state.product;

        // const req= await fetch(`https://api.spoonacular.com/food/ingredients/${id}/information`) ;
        const req= await fetch(`https://api.spoonacular.com/food/products/search?query=${title}&apiKey=${API_KEY}`);
        const res = await req.json();
        // 

        this.setState({ activeProduct: res.products[0]})

        console.log(this.state.activeProduct)

        
    
    }


    render(){
        console.log(this.props)
        return(

            <div>
                Product Compoment
            </div>
        )
    }
}

export default Product;