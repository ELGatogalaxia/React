import { useState } from "react"
function Ejercicio3() {
    
    const [meta, setMeta] = useState(["Aprender React", "Crear un portafolios", "Conseguir trabajo!"])
    const [nuevameta, setNuevaMeta] = useState("")

    const agregar = () =>{
        if (nuevameta.trim() === "") return;
        setMeta([...meta, nuevameta])
        setNuevaMeta("")
    }
    
    return (


        <div>
            <ul>
                {meta.map((mimeta, index) => (
                    <li key={index}>{mimeta}</li>
                ))}
            </ul>
            
            <input type="text" value={nuevameta} onChange={(e)=>{setNuevaMeta(e.target.value)}}/>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}
export default Ejercicio3