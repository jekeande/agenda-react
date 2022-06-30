import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contatos from '../containers/contatos';
import NewContact from '../containers/NewContact';
import './App.css';

export default function Router() {
  return (
     <div className="App">
        <BrowserRouter>
              <div className="Menu">
                <h2><Link to="/">Contatos</Link></h2>
                <div className="divi"></div>
                <h2><Link to="/new">Novo contato</Link></h2>
              </div>
          <Routes>
              <Route exact path="/" element={<Contatos />} />
              <Route exact path="/new" element={<NewContact />} />
          </Routes>
      </BrowserRouter>
     </div>
    
  );
}