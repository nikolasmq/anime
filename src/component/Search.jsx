import React, { useState } from 'react'

const Search = ({onBuscar}) =>{

    const [palabra, setPalabra] = useState("")

    const handleChange = (e) => {
        setPalabra(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(palabra);
        onBuscar(palabra)
    } 

    return (
        <form onSubmit={handleSubmit} className="d-flex" style={{ maxWidth: '25em', margin: '16px auto' }}>
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Busca por el nombre:"
                onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
    );
}

export default Search;