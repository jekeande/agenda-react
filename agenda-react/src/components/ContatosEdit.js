import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import EditContact from "../components/EditContact";
import axios from 'axios';

export default function ContatosEdit() {
    
    const { id } = useParams();    
    const URL = `http://localhost:3004/contatos/${id}`
    const [state, setState] = useState([])
    const [updateList, setUpdateList] = useState(false)

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
    <div>
        {
            state.map((contatos, index) => (
                <EditContact
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