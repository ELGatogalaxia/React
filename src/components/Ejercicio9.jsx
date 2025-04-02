import { useState } from "react"

function Ejercicio9() {
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
        <div className="bg-neutral-500 text-center p-4">
            <h1 className="text-4xl">Ejercicio9 Lista - diseño con tailwindcss</h1>
            <input className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            {list.length === 0 ? (<p>no hay tareas</p>) : (
                <ul className="text-xl text-blue-900 font-semibold">
                    {list.map((tarea, index) => (

                        <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                            {tarea}
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-light rounded-sm px-2 shadow-md hover:shadow-xl m-3 transition duration-300 text-base" onClick={() => { borrar(index) }}>Borrar</button>
                        </li>

                    ))}
                </ul>
            )}
            <button className=" bg-purple-700 hover:bg-purple-800 text-xl text-white p-1 
            font-semibold rounded-xl px-5 shadow-md hover:shadow-xl m-3 transition duration-300 " onClick={agregar}>Agregar</button>
            <h2>contador de listas: {list.length}</h2>
        </div>
    )

}
export default Ejercicio9