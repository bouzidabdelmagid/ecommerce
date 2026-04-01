import React from 'react'
import './ModalComponent.css'

const ModalComponent = ({ title, children, onclose, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className='modal' tabIndex='-1'>
      <div className='modal-dialogue'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button type='button' className='close-button' onClick={onclose}>Close</button>
          </div>
          <div className='modal-body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent