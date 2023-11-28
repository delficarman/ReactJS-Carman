import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBarFolder/NavBar";

function Layout(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Layout;