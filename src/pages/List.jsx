import { useState } from "react";
import { useRepository, RepositoryList, ApiRepository } from "../API/Github";
import {Outlet, useNavigate } from "react-router-dom";
export function List(){

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const[search , setSearch] = useState("");
    const[repository , setRepository] = useState("")
    const [myFavorits, setMyFavorits] = useState({})
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("submit");
        //setRepository(<ApiRepository user={user}/>)
        navigate(`${user}`)
    }


    return(
        <div>
            <div>
                <button onClick={() => navigate("/")}>Back</button>
                <form  className="list-form" onSubmit={handleSubmit}>
                    <label>Escreva o Username que deseja listar os repositórios</label>
                    <input type="text" className="list-user-input" placeholder="Enter a GitHub UserName" value={user} onChange={(e)=> setUser( e.target.value)} />
                    <button type="submit"className="list-submit-btn" >Buscar</button>
                </form>
                <h1></h1>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    )
}