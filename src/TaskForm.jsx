import { useState } from "react"





export default function TaskForm({onAdd}){
    const[newTaskName, setNewTaskName] = useState('')

    function handleSubmit(ev){
        ev.preventDefault()
        onAdd(newTaskName)
        setNewTaskName('')

    }


    return(
    <form onSubmit={handleSubmit}>
        <button>+</button>
        <input type = "text"
                placeholder="Your next task is..."
                value={newTaskName}
                onChange={ev => setNewTaskName(ev.target.value)}/>
    </form>
    )
   
}