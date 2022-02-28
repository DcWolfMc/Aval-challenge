import { useState } from "react";
import  saveRepos from "../SaveRepos"
export const Star = (props) =>{
    
    const repository = props.repository;
    const [className, setClassName] = useState("star-image bi bi-star")
    
    const handleSave =() =>{
        if(!saveRepos.find((r)=>r.id === repository.id)){
            saveRepos.push(repository)
            console.log(saveRepos)
            setClassName("star-clicked-image bi bi-star-fill")
        }else if(saveRepos.find((r)=>r.id === repository.id)){
            /*let index = saveRepos.indexOf(repository.id);
            saveRepos.splice(index,1);
            console.log(saveRepos);*/
            //setClassName("star-image bi bi-star")
        }
        
    }
    const handlehover =() =>{
        if(saveRepos.find((r)=>r.id === repository.id)){
            setClassName("star-clicked-image bi bi-star-fill")
        }
    }
    
    return<i className={className} onClick={handleSave} onMouseOver={handlehover}></i>
}