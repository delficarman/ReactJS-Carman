import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id,title, image, category, description, price, stock}) => {
    return(
        <article>
            <img src={image} alt={title}/>
            <p>Categoria: {category}</p>
            <p>Descripcion: {description}</p>
            <p>Precio: {price}</p>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: " , quantity)}/>
        </article>
    )

}

export default ItemDetail;