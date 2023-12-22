import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({id, image, price, title, stock}) => {

    return(
        <div className="CardContainer">
            <article className="card">
                    <img src={image} alt={title}/>
                    <div className="card-details">
                        <p className="card-text">Precio: ${price}</p>
                        <p className="card-text">Stock: {stock}</p>
                        <Link to={`/item/${id}`} className="card-link">Ver detalle</Link>
                    </div>
            </article>
        </div>
    )

}

export default Item;