import React from 'react'
import header from '../img/header.jpg'
import nombre from '../img/nombre.png'

const Header = () => {
  return (
    <section className='header'>
        <img className='img1' src={header} alt="" />
        <img className='img2' src={nombre} alt="" />
    </section>
  )
}

export default Header