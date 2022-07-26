import React, { useEffect, useState } from "react";
import axios from 'axios';
import Contact from "./contact";
import '../Assets/Contact.css';

export default function ListContact() {

    const URL = "http://localhost:3004/contatos"
    const [state, setState] = useState([])
    const [updateList, setUpdateList] = useState (false)
    const [ search, setSearch ] = useState("")

    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    const searcher = (e) => {
        setSearch(e.target.value)   
    }
    const results = !search ? state : state.filter((dato)=> dato.nome.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        getData().then((response) => {
        setState(response.data);
        })
    }, [updateList])

    return (
        <div>
            <div className="busca">
                <input type="text" placeholder='Buscar Contato' value={search} onChange={searcher} className='buscar'/>
            </div>

            <div className="ListContact">
                    {
                        results.map((contatos, index) => (
                            <Contact 
                                key={index}
                                contatos={contatos}
                                setUpdateList = {setUpdateList}
                                updateList = {updateList}
                            />
                        ))
                    }
            </div>
        </div>
       
        
    );
}