import React, { useState, useEffect } from 'react'
import Gif from './Gif/Index'
import getGifs from '../services/getGifs';


export default function ListOfGifs({ params }) {

    const { keyword } = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs =>
                setGifs(gifs),
                setLoading(false)
            )
    }, [keyword])

    if(loading) return <spam>loading</spam>

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )}
    </div>



}
