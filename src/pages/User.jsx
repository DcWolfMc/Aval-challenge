import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom"

import { ApiRepository } from "../API/Github";

export function User(){
    const { user } = useParams();
    console.log({user})
    return(
        <ApiRepository user={user}/>
    )
}
export function NoUser(){
    const { user } = useParams();
    return(
    <div>Sorry but {user} does not exist.</div>
    )
}