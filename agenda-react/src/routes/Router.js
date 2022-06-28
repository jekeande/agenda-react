import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from '../containers/App';
import NewContact from '../containers/NewContact';

export default function Router() {
  return (
    <BrowserRouter>
            <h2><Link to="/">Contatos</Link></h2>
            <h2><Link to="/new">Novo contato</Link></h2>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/new" element={<NewContact />} />
        </Routes>
    </BrowserRouter>
  );
}