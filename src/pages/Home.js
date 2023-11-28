import ProfileCard from "../components/ProfileCard"
import CamisetaArg from "../img/camiseta-arg.jpeg";
import CamisetaNZ from "../img/camiseta-nz.jpeg";
import CamisetaAus from "../img/camiseta-aus.webp";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function Home(){


    return(
        <div>
            <ItemListContainer greeting={"Bienvenidos"}/>
            <ItemDetailContainer/>

        </div>
    )
}

export default Home;