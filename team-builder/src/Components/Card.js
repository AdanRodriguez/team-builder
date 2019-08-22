import React from "react";

import {Link} from "react-router-dom";

const Card = (props) => {
    const {person} = props;
return(
    <div className="card">
        <h1>Person Card</h1>
        <div>Name: {person.name}</div>
        <div>Email: {person.email}</div>
        <div>Role: {person.role}</div>
        <Link to={`/edit/${person.id}`}>Edit</Link>
    </div>
)
};

export default Card;