import React, {useState}from 'react';
// import logo from './logo.svg';
import './App.css';

import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [people, setPeople] = useState([]);
  return (
    <div className="App">
      <Form setPeople={setPeople}/>
    {people.map(person => <Card person={person}/>)}
    </div>
  );
}

export default App;

