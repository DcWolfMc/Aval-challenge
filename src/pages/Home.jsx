
import { Link } from "react-router-dom";

export function Home(){
    
    return(
        <nav className="navegationBar">
            <ul className="mainMenu">
                <li className="mainMenu-item">
                    <Link  to="/list" >Buscar Repositórios</Link>
                </li>
                <li className="mainMenu-item">
                    <Link  to="favorits" >Favoritos</Link>
                </li>
            </ul>
        </nav>
    )
}