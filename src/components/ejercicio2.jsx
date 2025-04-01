import { useState } from "react";

function Ejercicio2() {
    const [edad, setedad] = useState(0);

    const cambio = (e) => {
        setedad(e.target.value);
    }

    return (
        <div>
            <h1>Edad :   {edad}</h1>
            <input type="number" placeholder="Edad" onChange={(cambio)} />
        </div>
    )
}

export default Ejercicio2