import React, {useState}from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from "./Components/Card";
import Form from "./Components/Form";
import {Route, Link} from "react-router-dom";

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = person =>{
    setPeople([...people, {...person, id: Date.now()}]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
    const oldPerson = peopleCopy.find(person => person.id === editedPerson.id);
    console.log(editedPerson, oldPerson);
    // oldPerson.name = editedPerson.name;
    // oldPerson.email = editedPerson.email;
    // oldPerson.role = editedPerson.role;
    Object.assign(oldPerson, editedPerson);
    setPeople(peopleCopy);
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route path="/add" render={props => <Form {...props}                      submitPerson={addPerson} buttonText= "Add Person" />} />
      <Route exact path="/" render={props => people.map(person => <Card person={person}/>)} />
      <Route path="/edit/:id" render={props => {console.log(props);
        const person = people.find(person => person.id.toString() ===                  props.match.params.id);
                    return <Form {...props} initialPerson={person} submitPerson={editPerson} buttonText="Edit Person" />; }}/>
    </div>
  );
}

export default App;

