import React from "react";

const Card = (props) => {
    const {person} = props;
return(
    <div className="card">
        <h1>Person Card</h1>
        <div>Name: {person.name}</div>
        <div>Email: {person.email}</div>
        <div>Role: {person.role}</div>
    </div>
)
};

export default Card;