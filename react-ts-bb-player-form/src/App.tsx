import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/addToList';

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

  /* array with type people */
  const [people, setPeople] = useState<IState["people"]>([

  /* data to populate array */
  {  name: "LeBron James",
    age: 35,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Allegeric to staying on the same team",
  },
  {
    name: "Kobe Bryant",
    age: 42,
    url: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
  }
  ])

  return (
    <div className="App">
      <h1>
        People Invited to my party
        <List people={people}></List>
      </h1>
      <AddToList/>
    </div>

  );
}

export default App;
