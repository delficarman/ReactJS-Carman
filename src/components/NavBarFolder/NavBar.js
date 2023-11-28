import CartWidget from "../CartWidget/CartWidget";
import rugby from "./assets/rugby.jpeg";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <Link to="/" className="navbar-item title is-2">
                        <img src={rugby} width={80} height={100} alt="logo-rugby"/>
                        Rugby World
                    </Link>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start buttons are-medium">
                        <Link to="/productos" className="button is-white" >
                            Productos
                        </Link>  
                        <Link to="/equipos" className="button is-white" >
                            Equipos
                        </Link>  
                        <Link to="/paises" className="button is-white" >
                            Paises
                        </Link>  
                </div>
            </div>
            <div className="navbar-end">
                <button className="button is-white is-medium">
                    <CartWidget/>
                </button>
            </div>
        </nav>
    )
}

export default NavBar
