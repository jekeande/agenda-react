import React, {useState} from "react";
import '../Assets/Contact.css';
//import axios from 'axios';

export default function EditContact({contatos}) {

  const [setData] = useState()

  const handleChange = (event) => {
    setData({
      [event.target.name]: event.target.value
    })
  }

  return (
              <div className="container">
                <div className="EditContact">
                  <h1 className="agr">Editar contato</h1>
                    <form>
                      <label><h3>Nome:
                          <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={contatos.nome}
                            onChange={handleChange}
                            required
                          /></h3>
                      </label>
                      <label><h3>Telefone:
                          <input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            value={contatos.telefone}                            
                            onChange={handleChange}
                            required
                          /></h3>
                      </label>
                      <label><h3>E-mail:
                          <input
                            type="text"
                            name="email"
                            placeholder="E-Mail"
                            value={contatos.email}
                            onChange={handleChange}
                            required
                          /></h3>
                      </label>
                      <button className="Editar" type="submit">Editar</button>
                    </form>
              </div>
            </div>
  );
}