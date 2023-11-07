import CartWidget from "../CartWidget/CartWidget"
import rugby from "./assets/rugby.jpeg"

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a className="navbar-item title is-2" href="https://www.rugbyworldcup.com/2023">
                        <img src={rugby} width={80} height={100} alt="logo-rugby"/>
                        Rugby World
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start buttons are-medium">
                    <button className="button is-white" >
                        Productos
                    </button>
                    <button className="button is-white">
                        Equipos
                    </button>
                    <button className="button is-white">
                        Paises
                    </button>
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

