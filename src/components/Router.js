import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Product from "./Product"

const Router = () => (

    <BrowserRouter>
        <Switch>
        <Route path="/" component={App}/>
        <Route path="/product" component={Product}/>
        </Switch>
    </BrowserRouter>

);

export default Router;