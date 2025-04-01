import { useState } from "react";
function App2() {
    const [contador, setcontador] = useState(0);


    function Disminuir() {
        if (contador >= 1) {
            setcontador(contador - 1)
        }
        else {
            console.log("no puedes poner numeros negativos")
        }
    }

    return (

        <div>
            <h1>setcontador: {setcontador}</h1>
            <h1> Contador: {contador}</h1>
            <button onClick={() => setcontador(contador + 1)}>Aumentar</button>
            <button onClick={Disminuir}>Disminuir</button>
        </div>
    )


}
export default App2
