import React, { useEffect, useState } from "react";
import axios from 'axios';
import Contact from "./contact";

export default function ListContact() {

    const URL = "http://localhost:3004/contatos"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [state, setState] = useState([])

    useEffect(() => {
        getData().then((response) => {
        setState(response.data);
        })
    }, [])

    return (
        <div className="ListContact">
            {
                state.map((contatos, index) => (
                    <Contact 
                    key={index}
                        contatos={contatos}
                    />
                ))
            }
        </div>
    );
}