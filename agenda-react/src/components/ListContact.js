import React, { useEffect, useState } from "react";
import axios from 'axios';
import Contact from "./contact";
import '../Assets/Contact.css';

export default function ListContact() {

    const URL = "http://localhost:3004/contatos"
    const [state, setState] = useState([])
    const [updateList, setUpdateList] = useState (false)

    const getData = async () => {
        const response = await axios.get(URL);
        return response;
    }

    useEffect(() => {
        getData().then((response) => {
        setState(response.data);
        })
    }, [updateList])

    return (
        <div className="ListContact">
                {
                    state.map((contatos, index) => (
                        <Contact 
                            key={index}
                            contatos={contatos}
                            setUpdateList = {setUpdateList}
                            updateList = {updateList}
                        />
                    ))
                }
        </div>
        
    );
}