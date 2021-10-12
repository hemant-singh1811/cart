import React from "react";
import CartItem from "./cartItem";

const Cart = (props) => { 
    const { products } = props;
    return (
        <div className="cart">
            {  products.map((product)=> ( 
                    <CartItem 
                    product={product}
                    key={product.id}
                    onIncrease={props.onIncrease}
                    onDecrease={props.onDecrease} 
                    onDelete={props.DeleteItem}
                /> 
                ))}
        </div>
    )
}

export default Cart;