import saveRepos from "../componensts/SaveRepos"
import { ListItem } from "../componensts/ListItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Favorits(){
    const navigate = useNavigate();
    const [favoritsList, setFavoritsList] = useState();
    const [data, setData] = useState(saveRepos)
    const [update, setUpdate] = useState(false)
    useEffect(()=>{
        let MyFavorits = data.map((repository)=>{
            setUpdate(false);
            const handleDelete =() =>{
                if(data.find((r)=>r.id === repository.id)){
                let index = saveRepos.indexOf(repository);
                saveRepos.splice(index,1);
                setData(saveRepos)
                console.log(data)
                setUpdate(true)
                }
            }
            console.log(repository)
            return(
                <ul key={repository.id}>
                    <div><button onClick={()=> handleDelete(repository)}>Desfavoritar</button></div>
                    <div>
                        <ListItem className="Repository-title" title="Title:" item={ repository.name } />
                        <ListItem className="Repository-owner" title="Owner:" item={ repository.owner.login }/>
                        <ListItem className="Repository-stars" title="Stars:" item={ repository.stargazers_count }/>
                        <ListItem className="Repository-forks" title="Forks:" item={ repository.forks_count }/>
                        <ListItem className="Repository-description" title="" item={ repository.description }/>
                    </div>
                </ul>
            );
        })
        setFavoritsList(MyFavorits)
        return(setUpdate(false))
    },[update])
    
    return(
        <>
        <button onClick={() => navigate("/")}>Back</button>
        <div>{favoritsList}</div>
        </>
    )
}
