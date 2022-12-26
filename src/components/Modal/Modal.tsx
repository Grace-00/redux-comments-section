/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Button } from '../Button'
import './modal.css'

const Modal = () => {    
  return (
      <div>
          <h4 style={{ color: 'hsl(212, 24%, 26%)', fontWeight: 500, fontSize: 20, lineHeight: 23.7 }}>Delete Comment</h4>
          <p>Are you sure you want to delete this comment?
              This will remove the comment and can’t be undone.</p>
          <div style={{ display: 'flex' }}>
              <Button className='cancel-confirmation-modal-btn' buttonName='NO, CANCEL' onClick={() => { }} />
              <Button className='delete-confirmation-modal-btn' buttonName='YES, DELETE' onClick={() => { }} />
          </div>
      </div>
  )
}

export default Modal