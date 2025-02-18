import React, { useRef } from "react";
import Form from "./Form";
export default function Datos() {

    const nombre = useRef()
return (
    <div>
    <Form>
        <input type="text" ref={nombre} placeholder="Nombre" />
        <button onClick={() => alert(`Nombre: ${nombre.current.value}`)}>Submit</button>
    </Form>
    </div>
)
}
