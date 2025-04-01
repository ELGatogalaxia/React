import { useState } from "react"

function Ejercicio5() {
    const [list, setList] = useState(["hola", "como estas", "perro"])
    const [newTask, setNewTask] = useState("")

    const agregar = () => {
        if (newTask.trim() === "") return
        setList([...list, newTask])
        setNewTask("")
    }

    const borrar = (index) => {
        const tareasFiltradas = list.filter((_, i) => i !== index)
        setList(tareasFiltradas)
    }
    return (
        <>
            <h1>Mis tareas</h1>
            <input type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            {list.length === 0 ? (<p>no hay tareas</p>) : (
                <ul>
                    {list.map((tarea, index) => (
                        <>
                            <li key={index}>{tarea}</li>
                            <button onClick={() => { borrar(index) }}>Borrar</button>
                        </>
                    ))}
                </ul>
            )}
            <button onClick={agregar}>Agregar</button>
            <h2>contador de listas: {list.length}</h2>
        </>
    )

}
export default Ejercicio5