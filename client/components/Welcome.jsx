import React from 'react'
import { Link } from 'react-router-dom'

import Title from './Title'
import Footer from './Footer'
import Login from './Login'

import { findCookie } from '../authenticated'

const Welcome = () => {
  return (
    <>
      <Title />
      <div className='container'>
        <div className='left-container'>
          <Link to='/budget' onClick={() => findCookie()}>Create a budget</Link>
        </div>
        <div className='right-container'>
          <Login />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Welcome
