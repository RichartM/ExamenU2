import React, { useState } from "react";
import Datos from "./Datos";

export default function Form() {
const [name, setName] = useState(null)
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")

const handleLogin = async () => {
    if (password.length < 6 || password === "") {
        try {
            throw new Error("La password no cuenta con 6 caracteres o está vacía");
        } catch (error) {
            alert(error.message);
        }
    } else if (name === null || name.trim() === "") {
        try {
            throw new Error("El nombre no puede estar vacío");
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert("Datos enviados correctamente");
    }
}

return (
    <div>
        <h2>REGISTRO</h2>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <p></p>
        <button onClick={handleLogin}>Registrar</button>
        <Datos name={name} email={email} password={password} />
    </div>
)
}
