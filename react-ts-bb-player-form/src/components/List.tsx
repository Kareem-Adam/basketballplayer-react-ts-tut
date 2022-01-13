import React from "react";

  /* interface creates type definitions for a given variable/object */
  interface IProps{
    people: {
      name: string
      age: number 
      url: string 
      note?: string  //? allows property to be optional 
    }[] //[] defines people as type object 
  }

/* Child component to render player list */
const List = (props: IProps) => {
    return (
        <div>
            I am a list
        </div>
    )
}

export default List