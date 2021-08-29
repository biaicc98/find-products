import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Product from "./Product"
import Topbar from "./Topbar"

const Router = () => (

    <BrowserRouter>
        
        <Switch>
        <Route path="/" component={App} exact/>
        {/* : is a parameter */}
        <Route path="/product/:id" component={Product}/>
        </Switch>
    </BrowserRouter>

);

export default Router;