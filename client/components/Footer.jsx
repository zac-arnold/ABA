import React from 'react'

const Footer = () => {
  const copyright = '2020 ABA'
  const authors = 'A.Walker-Cochrane - J.Alipate - Z.Arnold - P.McNie'

  return (
    <div className='footer'>
      <div className="socials">
        <img src='./icons/facebook.svg' />
        <img src='./icons/github.svg' />
        <img src='./icons/instagram.svg' />
      </div>
      <p>{authors}</p>
      <p>&copy; {copyright}</p>
    </div>
  )
}

export default Footer
