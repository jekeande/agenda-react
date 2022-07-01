import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Assets/Contact.css';

export default function NewContact() {

  const Navigate = useNavigate();

  const [data, setData] = useState ({id: null, nome: "", telefone: "", email: ""})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const URL = "http://localhost:3004/contatos"

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(URL,data);
    Navigate('/');
  }

  return (
    <div className="container">
      <div className="NewContact">
        <h1 className="agr">Salvar novo contato</h1>
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
              <button className="salvar" type="submit">Salvar</button>
            </form>
      </div>
    </div>
  );
}