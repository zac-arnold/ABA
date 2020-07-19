import React from 'react'
// import { FaInstagram } from 'react-icons/fa'
// import { FaFacebook } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  const copyright = '2020 ABA'
  const authors = 'A.Walker-Cochrane - J.Alipate - Z.Arnold - P.McNie'

  return (
    <div className='footer'>
      {/* <FaInstagram />
      <FaFacebook />
      <FaGithub /> */}
      <p>{authors}</p>
      <p>&copy; {copyright}</p>
    </div>
  )
}

export default Footer
