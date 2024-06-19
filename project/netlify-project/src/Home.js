import React from 'react'
import src from './logo.svg';

function Home() {
  return (
    <>
    <div className='head'>
      <h1>React Js</h1>
      <div className='navbar'>
        <a href=''>Home</a>
        <a href=''>Service</a>
        <a href=''>Product</a>
        <a href=''>Contact</a>
        <a href=''>About</a>
      </div>
    </div>
    <div className='banner'>
      <img className='image' src={src} alt='Not found'/>
    </div>
    </>
  )
}

export default Home