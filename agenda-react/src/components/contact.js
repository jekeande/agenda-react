import React from "react";
import axios from "axios";
import './ListContact.css';

export default function Contact({contatos, setUpdateList, updateList}) {

    const URL = "http://localhost:3004/contatos"

    const handleDelete = async () => {
        await axios.delete(`${URL}/${contatos.id}`);
        setUpdateList(!updateList)
    }

    const handleEdit = () => {
        axios.put(`${URL}/${contatos.id}`);
        setUpdateList(!updateList)
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
                    <button className="edit" onClick={handleEdit}>Editar</button>
                    <button className="dele" onClick={handleDelete}>Eliminar</button>
                </div>       
            </fieldset>
        </div>
    )
}