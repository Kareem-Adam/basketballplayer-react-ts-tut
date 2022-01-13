import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/addToList';

  /* interface creates type definitions for a given variable/object */
  /* exported for use in child */
  export interface IState{
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
    url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzQyOTk2OTY3ODkyODQ0/gettyimages-490703338.jpg"
  }
  ])

  return (
    <div className="App">
      <h1>
        People Invited to my party
        <List people={people}></List>
      </h1>
      <AddToList people={people} setPeople={setPeople}></AddToList> {/*pass people and setPeople for array mutation*/}
    </div>

  );
}

export default App;
