import ProfileCard from "./components/ProfileCard.js";
import CamisetaArg from "./img/camiseta-argentina.png";
import CamisetaNZ from "./img/camiseta-nuevazelanda.png";
import CamisetaAus from "./img/camiseta-australia.png";

import NavBar from "./components/NavBarFolder/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

import "bulma/css/bulma.css";


function App(){
    return (
        <div>
            <section className="NavBar">
                <NavBar />
                <ItemListContainer greeting={"Bienvenidos"}/>
            </section>
            <section className="hero">
                <div className="hero-body">
                    <h1>Camisetas</h1>
                </div>
            </section>
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Camiseta Argentina" precio={30000} img={CamisetaArg}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Camiseta Nueva Zelanda" precio={20000} img={CamisetaNZ}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Camiseta Australia" precio={20000} img={CamisetaAus}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;