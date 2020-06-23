import React from 'react'
import { link } from "wouter"


const POPULAR_GIFS = ["matrix", "rick", "morty"]

export default function Home() {

    const [keyword, setKeyword] = useState('')

    return (
        <>
            <h3 className="App-title">
                Los Gifs más populares
        </h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={puplarGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
