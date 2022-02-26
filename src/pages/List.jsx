import { useState } from "react";
import { useRepository, RepositoryList, ApiRepository } from "../API/Github";
import {Outlet, useNavigate } from "react-router-dom";
export function List(){

    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("submit");
        //setRepository(<ApiRepository user={user}/>)
        navigate(`${user}`)
    }


    return(
        <div>
            <div className="search-header">
                <button className="back-button" onClick={() => navigate("/")}>Back</button>
                <form  className="list-form" onSubmit={handleSubmit}>
                    <div className="search-elements">
                        <input type="text" className="list-user-input" placeholder="Enter a GitHub UserName" value={user} onChange={(e)=> setUser( e.target.value)}/>
                        <button type="submit"className="list-submit-btn" >Buscar</button>
                    </div>
                    <label className="search-label">Escreva o Username que deseja listar os repositórios</label>
                    
                </form>
                <h1></h1>
            </div>

            <div className="list-body">
                <Outlet/>
            </div>
        </div>
    )
}