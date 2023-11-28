import { Link } from "react-router-dom";

const Item = ({id, image, price, title, stock}) => {

    return(
        <article>
            <img src={image} alt={title}/>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
        </article>
    )

}

export default Item;