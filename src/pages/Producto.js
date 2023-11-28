import { Link, useParams } from "react-router-dom";
import listaProductos from "../data";

function Producto(){

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=>producto.id == productoId);

    const {image, title, price} = producto;

    return(
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <Link to="/productos">Volver a productos</Link>
        </div>
    )

}


export default Producto;