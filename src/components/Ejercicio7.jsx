import { useState, useEffect } from "react";
import styles from "./Ejercicio7.module.css"; // Importamos CSS Module

function Ejercicio7() {
    const temaGuardado = localStorage.getItem("modoOscuro") === "true";
    const [modoOscuro, setModoOscuro] = useState(temaGuardado);

    useEffect(() => {
        localStorage.setItem("modoOscuro", modoOscuro);
    }, [modoOscuro]);

    const CambiarModoOscuro = () => {
        setModoOscuro(!modoOscuro);
    };

    return (
        <div className={`${styles.contenedor} ${modoOscuro ? styles.modoOscuro : styles.modoClaro}`}>
            {console.log(modoOscuro)}
            <h1 className={styles.titulo}>Ejercicio 7: Modo Oscuro - Claro</h1>
            <button
                className={`${styles.boton} ${modoOscuro ? styles.botonOscuro : styles.botonClaro}`}
                onClick={CambiarModoOscuro}>
                {modoOscuro ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
            </button>
        </div>
    );
}

export default Ejercicio7;
