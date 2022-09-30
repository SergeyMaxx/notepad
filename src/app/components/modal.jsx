import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../CSS/modal.css'

const Modal = ({active, setActive, addNote}) => {
  const [userInput, setUserInput] = useState('')
  const [userInputHeader, setUserInputHeader] = useState('')

  const characterLimit = 800
  const headerCharacterLimit = 60

  const handleChange = ({target}) => {
    if (characterLimit - target.value.length >= 0) {
      setUserInput(target.value)
    }
  }
  const handleChangeHeader = ({target}) => {
    if (headerCharacterLimit - target.value.length >= 0) {
      setUserInputHeader(target.value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNote(userInput, userInputHeader)
    setUserInput('')
    setUserInputHeader('')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e)
      setActive(false)
    }
  }

  return (
    <div
      className={active ? 'modal_ active' : 'modal_'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'content content-active position-relative' : 'content'}
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            rows="1"
            value={userInputHeader}
            onChange={handleChangeHeader}
            onKeyDown={handleKeyPress}
            placeholder="Введите заголовок..."
            className="center mb-1 h-0"
          />
          <small>{headerCharacterLimit - userInputHeader.length} Remaining</small>
          <textarea
            rows="4"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите новую заметку..."
            className="center mt-4 mb-1"
          />
          <small>{characterLimit - userInput.length} Remaining</small>
          <button
            className="btn btn-success w-25 add"
            onClick={() => setActive(false)}
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  )
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  addNote: PropTypes.func
}

export default Modal