import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ContatosEdit() {

    const Navigate = useNavigate();
    const { id } = useParams();
    const URL = `http://localhost:3004/contatos/${id}`
    const [state, setState] = useState([])

    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    useEffect(() => {
        getData().then((response) => {
            setState(response.data);
        });
    }, [])

    /*-----------------------------------------put------------------------------------------*/

    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.put(URL,state);
        Navigate('/');
    }

    return (
        <div>
            <div className="container">
                <div className="EditContact">
                    <h1 className="agr">Editar contato</h1>
                    <form onSubmit={handleSubmit}>
                        <label><h3>Nome:
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={state.nome}
                                onChange={handleChange}
                                required
                            /></h3>
                        </label>
                        <label><h3>Telefone:
                            <input
                                type="text"
                                name="telefone"
                                placeholder="Telefone"
                                value={state.telefone}
                                onChange={handleChange}
                                required
                            /></h3>
                        </label>
                        <label><h3>E-mail:
                            <input
                                type="text"
                                name="email"
                                placeholder="E-Mail"
                                value={state.email}
                                onChange={handleChange}
                                required
                            /></h3>
                        </label>
                        <button className="Editar" type="submit">Editar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}