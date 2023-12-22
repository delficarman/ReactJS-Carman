import { useContext } from "react";
import carrito from "./assets/icono-carrito.png";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);

    return(
        <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={carrito} alt='cart-widget'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;