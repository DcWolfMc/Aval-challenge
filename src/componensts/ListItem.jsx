import react from "react";

export function ListItem(props){
    return (
    <li className="repository-item">
        <b>{props.title}</b><span className="repository-item-content">{props.item}</span>
    </li>
        )
}