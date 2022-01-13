import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"

  /* interface creates type definitions for a given variable/object */
  interface IState{
    people: {
      name: string
      age: number 
      url: string 
      note?: string  //? allows property to be optional 
    }[] //[] defines people as type object 
  }

function App() {

  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>
        People Invited to my party
        <List></List>
      </h1>
    </div>

  );
}

export default App;
