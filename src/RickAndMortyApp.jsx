import React, { useState } from 'react'
import './App.css'
import ResidentInfo from './components/ResidentInfo'
import Location from './components/Location'
import useApi from './hooks/useApi'
import InputSeach from './components/InputSeach'
import Header from './components/Header'

const RickAndMortyApp = () => {

    const [searchLocation, setSearchLocation] = useState()

    const location = useApi(searchLocation)

  return (
    <div>
       <Header/>
       <div className='content'>
       <Location location={location}/>
       <InputSeach setSearchLocation={setSearchLocation}/>
           <div className='residentInfo'>
              {
                  location?.residents.map(resident => (
                      <ResidentInfo resident={resident}
                          key={resident}
                      />
                  ))
              }
           </div>
       </div>
    </div>
  )
}

export default RickAndMortyApp