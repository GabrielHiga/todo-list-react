import React, { useState } from 'react'
import './style.scss'

const AddButton = ({ handleAddTask }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleAddTask(inputData)
        console.log("Está funcionando!")
    }

    return (
        <>  
            <input
                onChange={handleInputChange}
                value={inputData}
                type="text"
                placeholder="Inserir tarefa"/>
            <button onClick={handleAddTaskClick}>Add</button>
        </>
    )
}

export default AddButton;