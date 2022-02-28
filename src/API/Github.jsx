import axios from "axios"
import { useEffect, useState } from "react"
import { ListItem } from "../componensts/ListItem"
import {Star} from "../componensts/Button/Star"
import saveRepos from "../componensts/SaveRepos";

const api ={
    baseURL: "https://api.github.com/",
    IdCliente: "c887edd04d5139ad5612",
    ClienteSecret: "79cf73d6d67850ed916e0426deb7a5ef898341f4"
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
        
        return(
            <ul className="repository-card" key={repository.id}>
                <div className="repository-card-header">
                    <ListItem className="Repository-title" title="Title:" item={ repository.name } />
                    <Star repository={repository}></Star>
                </div>
                <div className="repository-card-body">
                    <ListItem className="Repository-owner" title="Owner:" item={ repository.owner.login }/>
                    <ListItem className="Repository-stars" title="Stars:" item={ repository.stargazers_count }/>
                    <ListItem className="Repository-forks" title="Forks:" item={ repository.forks_count }/>
                    <div className="repository-card-description">
                        <ListItem className="Repository-description" title="" item={ repository.description }/>
                    </div>
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