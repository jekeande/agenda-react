import React, { useState } from "react";
import axios from 'axios';

export default function NewContact() {

  const [data, setData] = useState ({nome: "", telefone: "", email: ""})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3004/contatos"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(URL,data);
    console.log(response)

  }

  return (
    <div className="NewContact">
       <h1>Agregar contacto</h1>
          <form onSubmit={handleSubmit}>
            <label><h3>Nome:
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  defaultValue={data.nome}
                  onChange={handleChange}
                  required
                /></h3>
            </label>
            <label><h3>Telefone:
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  defaultValue={data.telefone}
                  onChange={handleChange}
                  required
                /></h3>
            </label>
            <label><h3>E-mail:
                <input
                  type="text"
                  name="email"
                  placeholder="E-Mail"
                  defaultValue={data.email}
                  onChange={handleChange}
                  required
                /></h3>
            </label>
            <button type="submit">Salvar</button>
          </form>
    </div>
  );
}