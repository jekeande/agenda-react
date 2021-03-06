import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contatos from '../containers/contatos';
import NewContact from '../containers/NovoContato';
import EditContact from '../containers/EditarContatos'
import '../Assets/Router.css';

export default function Router() {
  return (
     <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <Link to="/"><button className="buttonContatos">Contatos</button></Link>
                <div className="divi"></div>
                <Link to="/new"><button className="buttonNovo">Novo contato</button></Link>
              </div>
          <Routes>
              <Route exact path="/" element={<Contatos />} />
              <Route exact path="/new" element={<NewContact />} />
              <Route exact path="/edit/:id" element={<EditContact />} />
          </Routes>
      </BrowserRouter>
     </div>
    
  );
}