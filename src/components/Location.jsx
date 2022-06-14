import React from 'react'

const Location = ({location}) => {
  return (
    <div className='infoLocation'>
      <section className='sectionLocation'>
        <h4>Name:</h4>
        <h3>{location?.name}</h3>
      </section>
      <section className='sectionLocation'>
        <h4>Type:</h4>
        <h3>{location?.type}</h3>
      </section>
      <section className='sectionLocation'>
        <h4>Dimension:</h4>
        <h3>{location?.dimension}</h3>
      </section>
      <section className='sectionLocation'>
        <h4>Population:</h4>
        <h3>{location?.residents.length}</h3>
      </section>
    </div>
  )
}

export default Location