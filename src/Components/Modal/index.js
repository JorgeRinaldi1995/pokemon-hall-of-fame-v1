import { useState } from 'react'
import './Modal.css'

const Modal = ({modalTitle, modalText}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <div>
          {modalIsOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <span className="close-btn" onClick={closeModal}>
                  &times;
                </span>
                <h2>{modalTitle}</h2>
                <p>{modalText}</p>
              </div>
            </div>
          )}
        </div>
      );
    
}

export default Modal