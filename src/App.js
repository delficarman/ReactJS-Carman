

import "bulma/css/bulma.css";
import SearchBar from "./components/SearchBar.js";
import searchImages from "./api.js";
import { useState } from "react";
import ImageList from "./components/ImageList.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Equipos from "./pages/Equipos.js";
import Paises from "./pages/Paises.js";
import Productos from "./pages/Productos.js";
import Layout from "./pages/Layout.js";
import Producto from "./pages/Producto.js";


function App(){

    const [arrImage, setArrImage]= useState([]);

    const handleSubmit = async(term) => {
        let resultado= await searchImages(term);
        setArrImage(resultado);
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home />}/>
                        <Route path="/equipos" element={<Equipos />}/>
                        <Route path="/paises" element={<Paises />}/>
                        <Route path="/productos" element={<Productos />}/>
                        <Route path="/productos/:productoId" element={<Producto/>}/>
                    </Route>    
                </Routes>
            </BrowserRouter>
            <div>
                <SearchBar enSubmit={handleSubmit}/>
                <ImageList images={arrImage}/>
            </div>
        </div>
    )
}

export default App;

