import { useState, useEffect } from "react";

function Ejercicio12() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Contador: ${contador}`;
    }, [contador]);  // <- Se ejecuta cuando cambia 'contador'

    const disminuir = () => {
        if (contador <= 0) {
            console.log("no se puede bajar mas del 0 jjajaj")
        } else {
            setContador(contador - 1)
        }
    }
    return (
        <div className="text-center p-5">
            <h1 className="text-3xl font-bold">Contador: {contador}</h1>
            <button
                className="bg-blue-500 text-white px-5 py-2 mt-3 rounded-md hover:bg-blue-700 transition"
                onClick={() => setContador(contador + 1)}
            >
                Aumentar
            </button>
            <button
                className="bg-blue-500 text-white px-5 py-2 mt-3 rounded-md hover:bg-blue-700 transition"
                onClick={disminuir}
            >
                Disminuir
            </button>
            <button onClick={() => setContador(0)}>
                Resetear
            </button>
        </div>
    );
}

export default Ejercicio12;
