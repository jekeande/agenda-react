import React from "react";
import axios from "axios";
import ListContact from "./ListContact";

export default function Contact({contatos, setUpdateList, updateList}) {

    const URL = "http://localhost:3004/contatos"

    const handleDelete = async () => {
        const response = await axios.delete(`${URL}/${contatos.id}`);
        ListContact()
    }

    const handleEdit = () => {
        console.log(`editando`)
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
                    <button onClick={handleEdit}>Editar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                </div>       
            </fieldset>
        </div>
    )
}