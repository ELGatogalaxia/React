import { useState } from "react"
import "./Ejercicio6.css"
function Ejercicio6() {
    const [list, setList] = useState(["hola", "como estas", "perro"])
    const [newTask, setNewTask] = useState("")

    const agregar = () => {
        if (newTask.trim() === "") return
        setList([...list, newTask])
        setNewTask("")
    }

    const borrar = (index) => {
        const tareasFiltradas = list.filter((valor, i) => i !== index)
        setList(tareasFiltradas)
    }
    return (
        <div className="contenedorLista">
            <h1 className="titulo">Mis tareas</h1>
            <input type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            {list.length === 0 ? (<p>no hay tareas</p>) : (
                <ul className="lista">
                    {list.map((tarea, index) => (
                        <li className="tarea" key={index}>{tarea}
                            <button className="botonLista" onClick={() => { borrar(index) }}>Borrar</button>
                        </li>

                    ))}
                </ul>
            )}
            <button className="botonAgregar" onClick={agregar}>Agregar</button>
            <h2>contador de listas: {list.length}</h2>
        </div>
    )

}
export default Ejercicio6