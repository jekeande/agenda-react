import React from "react";
import './container.css';

export default function EditContact() {

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
                            required
                          /></h3>
                      </label>
                      <label><h3>Telefone:
                          <input
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            required
                          /></h3>
                      </label>
                      <label><h3>E-mail:
                          <input
                            type="text"
                            name="email"
                            placeholder="E-Mail"
                            required
                          /></h3>
                      </label>
                      <button className="Editar" type="submit">Editar</button>
                    </form>
              </div>
            </div>
  );
}