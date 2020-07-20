import React from 'react'
import { Button } from 'react-bootstrap'

import SignInModal from './SignInModal'

function SignInModalHolder () {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant="secondary" size="lg mr-2" onClick={() => setModalShow(true)}>Sign In</Button>
      <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default SignInModalHolder
