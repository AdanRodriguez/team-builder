import React,{useState} from "react";

const Form = (props) => {
    const { setPeople } = props;
    const[person, setPerson] =useState({name: "", email: "", role: ""});

    const changeHandler = event => {
        setPerson({...person, [event.target.name]: event.target.value });};

    const changeSubmit = event => {
        event.preventDefault();
        setPeople(people => [...people, person]);
        setPerson({name: "", email: "", role: ""});
        console.log(person);
    };    

    return (
        <form onSubmit={changeSubmit}>
            <input placeholder="name" value={person.name} name="name" onChange={changeHandler}/>
            <input placeholder="email" value={person.email} name="email" onChange={changeHandler}/>
            <input placeholder="role" value={person.role} name="role" onChange={
                changeHandler}/>
            <button type ="submit">Add</button>
        </form>
    );
};
 
export default Form;