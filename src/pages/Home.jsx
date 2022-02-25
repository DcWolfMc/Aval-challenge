
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export function Home(){
    const url = "https://api.github.com/users/octocat/repos";
    useEffect(() => {
        axios.get(url).then( (response) => console.log(response.data));
    }, []);
    
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