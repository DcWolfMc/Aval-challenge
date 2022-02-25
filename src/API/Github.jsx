import axios from "axios"
import { useEffect, useState } from "react"
import { ListItem } from "../componensts/ListItem"
import { SaveRepository } from "../pages/Favorits";
import saveRepos from "../componensts/SaveRepos";
const api ={
    baseURL: "https://api.github.com/",
    IdCliente: "c887edd04d5139ad5612",
    ClienteSecret: "79cf73d6d67850ed916e0426deb7a5ef898341f4"
}

export function useRepository(user){
    const url = `${api.baseURL}users/${user}/repos`;
    const [reposList, setReposList] = useState([]);
    axios.get(url).then( (response) => {
                if(response.data != []){
                    setReposList(response.data)
                    console.log("dentro do if")
                }
                return reposList
            });
}

export const RepositoryList = (list)=>{
    let myList = list.map((repository)=>{
        
        return(
            <ul key={repository.id}>
                <div><button >favoritar</button></div>
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
    return {myList}
}

export const ApiRepository = (props) =>{
    const url = `${api.baseURL}users/${props.user}/repos`;
    console.log(url);
    const [reposList, setReposList] = useState([]);
    if(props.user){
        useEffect(async () => {
            await axios.get(url).then( (response) => {
                    setReposList(response.data)
                    console.log("dentro do if")
            });
        }, [url]);
    }
    console.log(reposList);
    let List = reposList.map((repository)=>{
        //const [favorite, setFavorite] = useState(false);
        const handleSave =() =>{
            if(!saveRepos.find((r)=>r.id === repository.id)){
            saveRepos.push(repository)
            console.log(saveRepos)
            }
        }
        console.log(repository)
        return(
            <ul key={repository.id}>
                <div><button onClick={handleSave}>FAVORITAR</button></div>
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
    return(
        <>
            {List}
        </>
    )
}