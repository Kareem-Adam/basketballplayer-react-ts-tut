import React from "react";

/* interface creates type definitions for a given variable/object */
interface IProps {
    people: {
        name: string
        age: number
        url: string
        note?: string  //? allows property to be optional 
    }[] //[] defines people as type object 
}

/* Child component to render player list, defines list as functional react component with IProps interface */
const List: React.FC<IProps> = ({ people }) => {

    /* return type JSX element array */
    const renderList = (): JSX.Element[] => {
        /* duplicate and render array values */
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.age}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List