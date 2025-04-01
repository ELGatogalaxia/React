//leccion 2
import { useState } from "react";

function Ejercicio1() {
    const [mensaje, nuevo] = useState("Bienvenido a React")
    function cambiar() {
        nuevo("React es genial!")
    }
    return (
        <div>
            <h1>Mensaje : {mensaje}</h1>
            <button onClick={cambiar}>Cambiar</button>
        </div>

    )
}
export default Ejercicio1