// import React, { Component } from "react";
// import '../App.css';
// import Form from "./Form"
// import Products from "./Products"
// import  {Link} from "react-router-dom"

// const API_KEY = "a86cc456e8084db3ab216291254abcc4"


// class Topbar extends Component {
//   state = {
//     products: []
//   }
//   getProduct = async (e) => {

//     const product = e.target.elements.product.value;
//     //prevent full page refresh
//     e.preventDefault();
//     const api_call = await fetch(`https://api.spoonacular.com/food/products/search?query=${product}&apiKey=${API_KEY}`)

//     const data = await api_call.json()
//     this.setState({ products: data.products })
//     console.log(this.state.products)
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h1 className="App-title">Products</h1>
//           <Form getProduct={this.getProduct} />

//         </div>

//         {/* pass state products through prop */}
//         <Products products={this.state.products} />
//       </div>
//     );
//   }
// }

// export default Topbar;
