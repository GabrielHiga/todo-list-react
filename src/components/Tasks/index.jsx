import React from 'react'
import UniqueTask from '../UniqueTask';
import './style.scss'

const Tasks = ({ tasks }) => {
    return (
        <div className="task">
            {tasks.map((tasks) => (
                <UniqueTask tasks={tasks}/>
                // (tasks.completed) === true
                // ? 
                // <p>Apagado</p>
                // // <UniqueTask tasks={tasks}/>
                // :
            ))}
        </div>
    )
}

export default Tasks;