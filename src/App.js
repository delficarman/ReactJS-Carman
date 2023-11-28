import "bulma/css/bulma.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Equipos from "./pages/Equipos.js";
import Paises from "./pages/Paises.js";
import Productos from "./pages/Productos.js";
import Layout from "./pages/Layout.js";
import Producto from "./pages/Producto.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import NavBar from "./components/NavBarFolder/NavBar.js";


function App(){

    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

