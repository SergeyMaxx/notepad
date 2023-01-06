import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../CSS/modal.css'

const EditNoteModal = ({active, setActive, editNote, valueHeader, valueNote}) => {
  const [userInput, setUserInput] = useState(valueNote)
  const [userInputHeader, setUserInputHeader] = useState(valueHeader)

  const characterLimit = 800
  const headerCharacterLimit = 40

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
    editNote(userInput, userInputHeader)
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
        className={active ? 'content content-active' : 'content'}
        onClick={e => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            rows="1"
            value={userInputHeader}
            onChange={handleChangeHeader}
            onKeyDown={handleKeyPress}
            placeholder="Редактирование заголовка..."
            className="center mb-1 h-0"
          />
          <small style={{color: 'black'}}>
            {headerCharacterLimit - userInputHeader.length} Remaining
          </small>
          <textarea
            rows="4"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Редактирование заметки..."
            className="center mt-4 mb-1"
          />
          <small style={{color: 'black'}}>
            {characterLimit - userInput.length} Remaining
          </small>
          <button
            className="btn btn-success w-25 add"
            onClick={() => setActive(false)}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  )
}

EditNoteModal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  editNote: PropTypes.func,
  valueHeader: PropTypes.string,
  valueNote: PropTypes.string,
}

export default EditNoteModal