import React, { useState } from "react";
import { JsxAttributeLike } from "typescript";
import { IState as Props } from "../App"

interface InputProps {
    name: string,
    age: string,
    note: string,
    url: string
}

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

/* setPeople and people inherited from parent props */
const AddToList: React.FC<IProps> = ({ setPeople, people }): JSX.Element => {

    const [formInput, setInput] = useState<InputProps>
        ({
            name: "",
            age: "",
            note: "",
            url: ""
        })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...formInput, //destructure array so only target value changes 
            [e.target.name]: e.target.value //override new value  
        })
    }

    const handleClick = (): void => {
        /* return early if field is not populated */
        if (
            !formInput.name ||
            !formInput.age 
        ) { return }

        setPeople([
            ...people, //destructure array 
            {
                name: formInput.name,
                age: parseInt(formInput.age),
                url: formInput.url,
                note: formInput.note
            }
        ]);
    }

    return (<div className="AddToList">
        <input type="text"
            placeholder="Name"
            className="AddToList-input"
            value={formInput.name}
            onChange={handleChange}
            name="name"
        />
        <input type="number"
            placeholder="Age"
            className="AddToList-input"
            value={formInput.age}
            onChange={handleChange}
            name="age"
        />
        <input type="text"
            placeholder="Image URL"
            className="AddToList-input"
            value={formInput.url}
            onChange={handleChange}
            name="img"
        />
        <textarea
            placeholder="Notes"
            className="AddToList-input"
            value={formInput.note}
            onChange={handleChange}
            name="note"

        />
        <button className="AddToList" onClick = {handleClick}>
            Add to list
        </button>
    </div>)
}

export default AddToList