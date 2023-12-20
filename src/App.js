import "bulma/css/bulma.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import NavBar from "./components/NavBarFolder/NavBar.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";
import { CartProvider } from "./context/CartContext.js";


function App(){

    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                        <Route path="/cart" element={<Cart />}/>
                        <Route path="/checkout" element={<Checkout />}/>
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;

