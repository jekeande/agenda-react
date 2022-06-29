import React from "react";
import axios from "axios";

export default function Contact({contatos}) {

    const URL = "http://localhost:3004/contatos"

    const handleDelete = async () => {
        const response = await axios.delete(`${URL}/${contatos.id}`);
    }

    return (
        <div className="Contact">
            <fieldset>
                    <legend><h2>{contatos.nome}</h2></legend>
                <div>
                    <p>Telefone:{contatos.telefone}</p>
                    <p>E-mail:{contatos.email}</p>
                </div>
                <div>
                    <button>Editar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>       
            </fieldset>
        </div>
    )
}