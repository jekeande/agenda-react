import React, { useState } from "react";
import axios from 'axios';
import './container.css';

export default function EditContact({contatos}) {

  const URL = "http://localhost:3004/contatos"

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.put(URL,contatos.id);
  }

  return (
    <div className="container">
        <div className="EditContact">
          <h1 className="agr">Editar contato</h1>
            <form onSubmit={handleSubmit}>
              <label><h3>Nome:
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    Value={contatos.nome}
                    required
                  /></h3>
              </label>
              <label><h3>Telefone:
                  <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    Value={contatos.telefone}
                    required
                  /></h3>
              </label>
              <label><h3>E-mail:
                  <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    Value={contatos.email}
                    required
                  /></h3>
              </label>
              <button className="Editar" type="submit">Editar</button>
            </form>
      </div>
    </div>
    
  );
}