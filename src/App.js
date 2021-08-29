import React, { Component } from "react";
import './App.css';
import Form from "./components/Form"
import Products from "./components/Products"



const API_KEY = "a86cc456e8084db3ab216291254abcc4"



class App extends Component {
  state = {
    products: []
  }
  getProduct = async (e) => {

    const product = e.target.elements.product.value;
    //prevent full page refresh
    e.preventDefault();
    const api_call = await fetch(`https://api.spoonacular.com/food/products/search?query=${product}&apiKey=${API_KEY}`)

    const data = await api_call.json()
    this.setState({ products: data.products })
    console.log(this.state.products)
  }

componentDidMount() {
  const json =localStorage.getItem("products")
  const products = JSON.parse(json)
  // if name of key and value is the same, you can just leave one name
  this.setState( { products:products})
}


  //happens when component updates
componentDidUpdate= () => {
  //local storage only takes strings, so convert json
  const products = JSON.stringify(this.state.products)
  // arguments - name of the item, and state
  localStorage.setItem("products", products)
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Products</h1>
          <Form getProduct={this.getProduct} />

        </div>

        {/* pass state products through prop */}
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
