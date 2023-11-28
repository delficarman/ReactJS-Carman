import ProfileCard from "../components/ProfileCard"
import CamisetaArg from "../img/camiseta-arg.jpeg";
import CamisetaNZ from "../img/camiseta-nz.jpeg";
import CamisetaAus from "../img/camiseta-aus.webp";

function Home(){



    return(
        <div>
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

export default Home;