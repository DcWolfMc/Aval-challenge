import react from "react";

export function ListItem(props){
    return (
    <li className="Repository-item">
        <b>{props.title}</b>{props.item}
    </li>
        )
}