import React from "react";

const Form = props => (

    <form onSubmit={props.getProduct}>
        <input type="text" name="product"/>

        <button>Search</button>
    </form>

);

export default Form;