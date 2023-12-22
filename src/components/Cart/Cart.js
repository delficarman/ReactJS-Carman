import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>El carrito esta vacío</h1>
                <Link to='/' className="Option">Volver a productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p => <CartItem key={p.id} item={p} {...p}/>)}
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )

}

export default Cart;