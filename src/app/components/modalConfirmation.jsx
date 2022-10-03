import React from 'react'
import PropTypes from 'prop-types'
import '../CSS/modalConfirmation.css'

const ModalConfirmation = ({active, setActive, remove, confirmationText, buttonText}) => {
  return (
    <div
      className={active ? 'modal-conf active-conf' : 'modal-conf'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'content-conf content-active-conf' : 'content-conf'}
        onClick={e => e.stopPropagation()}
      >
        <h4 className="modal-header">{confirmationText}</h4>
        <div className="buttons">
          <button className="cancel" onClick={() => setActive(false)}>
            Отмена
          </button>
          <button className="remove" onClick={remove}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

ModalConfirmation.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  remove: PropTypes.func,
  confirmationText: PropTypes.string,
  buttonText: PropTypes.string
}

export default ModalConfirmation