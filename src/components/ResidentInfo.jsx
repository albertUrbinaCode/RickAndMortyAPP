import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({resident}) => {

    const [character, setResident] = useState()
    useEffect(()=>{
        axios.get(resident)
         .then(res => setResident(res.data))
         .catch(err => console.log(err))
    },[])

  return (
      <section className='residentCard'>
        <img src={character?.image} alt="imagen" />
        <h2>{character?.name}</h2>
        <hr />
        <h4>Status:</h4>
        <h3>{character?.status}</h3>
        <h4>Origin:</h4>
        <h3>{character?.origin.name}</h3>
        <h4>Appearance in episodes:</h4>
        <h3>{character?.episode.length}</h3>
      </section>
  )
}

export default ResidentInfo