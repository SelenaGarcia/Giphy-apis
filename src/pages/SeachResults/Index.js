import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/Index'
import useGifs from '../../hooks/useGifs'
import Spinner from '../../components/Spinner'

export default function SearchResults({params}) {
   
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})


    return (
        <div>
          {
              loading
              ? <Spinner/>
              : <ListOfGifs gifs={gifs}/>
          }  
        </div>
    )
}
