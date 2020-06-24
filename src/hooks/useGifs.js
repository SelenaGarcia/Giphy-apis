import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'


export default function useGifs({ keyword } = {keyword: null}) {
   // const [gifs, setGifs] = useState([])
    const [gifs, setGifs] = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "random"
       
        getGifs({ keyword })
            .then(gifs =>{
                setGifs(gifs),
                setLoading(false)
                localStorage.setItem('lastKeyword',keyword)
            })
    }, [keyword, setGifs])

    return { loading, gifs }
}