import React, { useState } from 'react'
import './style.scss'

const AddButton = ({ tasks, setTasks }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    return (
        <>  
            <input
            onChange={handleInputChange}
            value={inputData}
            type="text"
            placeholder="Inserir tarefa"/>
            <button onClick={handleAddTask}>Add</button>
        </>
    )
}

export default AddButton;