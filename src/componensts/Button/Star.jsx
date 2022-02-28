import { useState,useEffect } from "react";
import styled from "styled-components";
import  saveRepos from "../SaveRepos"
export const Star = (props) =>{
    
    const repository = props.repository;
    const [className, setClassName] = useState("star-image bi bi-star")
    /*if(saveRepos.find(()=>repository.id)){
        setClassName("star-clicked-image bi bi-star-fill")
    }*/
    const handleSave =() =>{
        if(!saveRepos.find((r)=>r.id === repository.id)){
            saveRepos.push(repository)
            console.log(saveRepos)
            setClassName("star-clicked-image bi bi-star-fill")
        }else{
            let index = saveRepos.indexOf(repository);
            saveRepos.splice(index,1);
            console.log(saveRepos);
            setClassName("star-image bi bi-star")
        }
        
    }
    const handlehover =() =>{
        if(saveRepos.find((r)=>r.id === repository.id)){
            setClassName("star-clicked-image bi bi-star-fill")
        }
    }
    
    return<i className={className} onClick={handleSave} onMouseOver={ handlehover }></i>
}