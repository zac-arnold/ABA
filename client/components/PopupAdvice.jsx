import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const PopupAdvice = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  return (
    <>
      <Modal
        className='advice-popup'
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    To use this app, start by inputing your income.
        </Modal.Body>
        <Modal.Footer>
          <Button size='sm' onClick={handleClose}>Got it!</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PopupAdvice
