import { useState } from "react";

function ProfileCard(props){

    const [count,setCount ] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    function handleClickResta(){
        if (count>0){
            setCount(count-1);
        }else{
            setCount(count);
        }
    }

    return(
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={props.img} alt="producto"/>
                </figure>
            </div>
            <div className="card-content">
                <h3 className="title is-4">{props.titulo}</h3>
                <p className="subtitle is-6">${props.precio}</p>
                <div className="columns">
                    <div className="column">
                        <button onClick={handleClick} className="button is-success is-fullwidth">Añadir al carrito</button>
                        <button onClick={handleClickResta} className="button is-danger is-fullwidth">Restar del carrito</button>
                    </div>
                    <div className="column">
                        <span>Añadidos en el carrito: {count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;