import React from 'react'

const Footer = () => {
  const copyright = '2020 ABA'
  const authors = `A.Walker-Cochrane - J.Alipate - Z.Arnold - P.McNie`

  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
      <div>{authors}</div>
    </div>
  )
}

export default Footer
