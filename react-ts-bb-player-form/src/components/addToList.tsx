import React, { useState } from "react";
import { JsxAttributeLike } from "typescript";

interface InputProps {

    name: string,
    age: string,
    note: string,
    img: string
}

const AddToList = (): JSX.Element => {

    const [formInput, setInput] = useState<InputProps>
        ({
            name: "",
            age: "",
            note: "",
            img: ""
        })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
        ...formInput, //destructure array so only target value changes 
            [e.target.name]: e.target.value //override new value  
        })
    }

    return (<div>
        <input type="text"
            placeholder="Name"
            className="AddToList-input"
            value={formInput.name}
            onChange={handleChange}
            name="name"
        />
        <input type="text"
            placeholder="Age"
            className="AddToList-input"
            value={formInput.age}
            onChange={handleChange}
            name="age"
        />
        <input type="text"
            placeholder="Image URL"
            className="AddToList-input"
            value={formInput.img}
            onChange={handleChange}
            name="img"
        />
        <textarea
            placeholder="Notes"
            className="AddToList-input"
            value={formInput.note}
            onChange={handleChange}

        />
    </div>)
}

export default AddToList