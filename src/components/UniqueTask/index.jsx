import React from 'react'
import './style.scss'

const UniqueTask = ({ tasks }) => {
    return (
        <div className="wrap-task">
            <li key={ tasks }>{tasks.title}</li>
            {/* { tasks.completed ? <li>True</li> : <li>False</li>} */}
            <button onClick={tasks.completed = true}>Remove</button>
        </div>
    )
}

export default UniqueTask;