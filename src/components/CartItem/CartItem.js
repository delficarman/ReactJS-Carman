import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";


const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext);

    return(
        <div>
            <picture>
                <img src={item.image} alt={item.title} />
            </picture>
            <div>
                <h2>{item.title}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default CartItem;