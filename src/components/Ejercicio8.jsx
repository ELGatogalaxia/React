import { useState } from "react"
import styled from "styled-components"
const Boton = styled.button`
background-color:rgb(17, 87, 38);
color: rgb(0, 255, 255);
border: none;
font-size: 15px;
border-radius: 16px;
cursor: pointer;
padding: 10px 15px;
transition: 0.7s;
&:hover{
    background-color: rgba(1, 77, 25, 0.64)
}
`
const Contenedor = styled.div`
text-align: center;
padding: 20px;
`
const Lista = styled.ul`
list-style-type: none;
text-align: center;
`
const Tareas = styled.li`
color: blue;
padding: 4px;
`
const Titulo = styled.h1`
color: rgb(40, 0, 149);
`
function Ejercicio8() {

    const [lista, setLista] = useState(["Aprender react!", "Hola Mundo"])
    const [dato, setDato] = useState("")

    const agregar = () => {
        if (dato.trim() === "") return
        setLista([...lista, dato])
        setDato("")
    }
    return (
        <Contenedor>
            <Titulo>Mi Titulo</Titulo>
            <input type="text" value={dato} onChange={(e) => { setDato(e.target.value) }} />
            <Lista>
                {lista.map((task, index) => (
                    <Tareas key={index}>{task}</Tareas>
                ))}
            </Lista>
            <Boton onClick={agregar}>Agregar</Boton>
        </Contenedor>
    )
}
export default Ejercicio8