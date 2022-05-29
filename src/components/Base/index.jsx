import {React, useEffect, useState} from 'react'
import AddButton from '../AddButton';
import Tasks from '../Tasks';
import './style.scss'

function Base() {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: "Estudar",
            completed: false,
        },
        {
            id: "2",
            title: "Correr",
            completed: false,
        },
        {
            id: "3",
            title: "Exercitar",
            completed: false,
        },
    ]);

    const handleAddTask = (taskTitle) => {
        const newTask = [...tasks,{
            title: taskTitle,
            id: Math.random(10),
            completed: false,
        }]
    }

    return (
        <div className="wrapper-todo">
            <div className="content-top">
                <AddButton onClick={handleAddTask()}/>
            </div>
            
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default Base;