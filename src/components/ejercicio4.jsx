import { useState } from "react"

function Ejercicio4() {

    const [tarea, setTarea] = useState(["Tarea 1", "Tarea 2", "Tarea 3"])
    const [NuevaTarea, setNuevaTarea] = useState("")

    const agregarTarea = () => {

        setTarea([...tarea, NuevaTarea])
        setNuevaTarea("")
    }
    const borrar = (index) => {
        const NuevasTareas = tarea.filter((valor, i) => i !== index)
        setTarea(NuevasTareas)
    }
    return (
        <div>
            <input type="text" value={NuevaTarea} onChange={(e) => { setNuevaTarea(e.target.value) }} />
            <button onClick={agregarTarea}>Agregar Tarea</button>

            <ul>
                {tarea.map((Mitarea, index) => (
                    <li key={index}>
                        {Mitarea}
                        <button onClick={() => borrar(index)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Ejercicio4