import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function ListContact() {

    const URL = "http://localhost:3004/contatos"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [state, setState] = useState([])

    useEffect(() => {
        getData().then((response) => {
        setState(response.data);
        })
    }, [])

    return (
        <div className="ListContact">
            {
                state.map((contatos) => (
                    <div className="Contact">
                        <fieldset>
                            <div>
                                <legend><h2>{contatos.nome}</h2></legend>
                                <p>E-mail:{contatos.email}</p>
                                <p>Telefone:{contatos.telefone}</p>
                            </div>
                            <div>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </div>
                            
                        </fieldset>
                    </div>
                ))
            }
        </div>
    );
}