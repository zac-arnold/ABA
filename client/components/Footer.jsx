import React from 'react'

const Footer = () => {
  const copyright = '2020 ABA'
  const authors = 'A.Walker-Cochrane - J.Alipate - Z.Arnold - P.McNie'

  return (
    <div className='footer'>
      <div className="socials">
        <img aria-label= 'Facebook link' src='./icons/facebook.svg' />
        <img aria-label= 'Github link'src='./icons/github.svg' />
        <img aria-label= 'Instagram link'src='./icons/instagram.svg' />
      </div>
      <p>{authors}</p>
      <p>&copy; {copyright}</p>
    </div>
  )
}

export default Footer
