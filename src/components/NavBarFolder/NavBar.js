import CartWidget from "../CartWidget/CartWidget";
import rugby from "./assets/rugby.jpeg";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";


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
                <div className="Categories">
                    <NavLink to={`/category/arg`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Argentina</NavLink>
                    <NavLink to={`/category/nz`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Nueva Zelanda</NavLink>
                    <NavLink to={`/category/aus`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Australia</NavLink>
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

