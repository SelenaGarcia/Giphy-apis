import React, {useState} from 'react'
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs"
import {useGifs} from '../../hooks/useGifs'


const POPULAR_GIFS = ["matrix", "rick", "morty"]

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs}= useGifs()

    const handleSubmit = event =>{
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = event =>{
        setKeyword(event.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange} 
            type='text' 
            value={keyword}
            placeholder="Buscar Gif"
            />
            </form>  
            <h3 className="App-title">
                últimos Gifs
            </h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">
                Los Gifs más populares
            </h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
