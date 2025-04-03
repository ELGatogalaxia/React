// UserCard.jsx (Componente hijo)

function UserCard({ nombre, edad, colorFavorito, ocupacion }) {
    return (
        <div className={`bg-green-500 m-5 max-w-xs rounded-xl p-4 card`} style={{ borderColor: colorFavorito }}>
            <h2 className="text-2xl font-semibold text-purple-700">{nombre}</h2>
            <p className="text-black">Edad: <span className="font-semibold">{edad} años</span></p>
            <p>Color favorito: <span className="font-semibold text-black" style={{ color: colorFavorito }}>{colorFavorito}</span></p>
            <p className="text-black">Ocupación: <span className="font-semibold">{ocupacion}</span></p>
        </div>
    );
}

export default UserCard;
