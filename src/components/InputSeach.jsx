import React, { useState } from 'react'

const InputSeach = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)
    }

  return (
    <form onSubmit={searchLocation } action="">
        <input className='inputSearch' type='text'/>
        <button className='btn'>Search</button>
    </form>
  )
}

export default InputSeach