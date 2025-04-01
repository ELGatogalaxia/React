import { useState } from "react"
import styles from "./Ejercicio6.module.css"
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
        <div className={styles.contenedorLista}>
            <h1 className={styles.titulo}>Mis tareas</h1>
            <input type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            {list.length === 0 ? (<p>no hay tareas</p>) : (
                <ul className={styles.lista}>
                    {list.map((tarea, index) => (
                        <li className={styles.tarea} key={index}>{tarea}
                            <button className={styles.botonLista} onClick={() => { borrar(index) }}>Borrar</button>
                        </li>

                    ))}
                </ul>
            )}
            <button className={styles.botonAgregar} onClick={agregar}>Agregar</button>
            <h2>contador de listas: {list.length}</h2>
        </div>
    )

}
export default Ejercicio6