import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../CSS/note.css'
import {useHistory} from 'react-router-dom'
import ModalConfirmation from './modalConfirmation'

const Note = ({note, remove, noteHistory, text, icon, buttonText}) => {
  const history = useHistory()
  const [modalActive, setModalActive] = useState(false)

  const removeNote = () => {
    setModalActive(false)
    remove(note.id)
  }

  return (
    <div
      className={`card ${note.noteColor} card-hover col me-3`}
      style={{width: '19rem', height: '16rem'}}
    >
      <div className="card-body relative-card">
        <h2 className="container header-panel card-title">
          {note.header}
        </h2>
        <p className="container card-text panel">
          {note.newNote}
        </p>
        <div className="d-flex">
          <p className="date">{note.date}</p>
          <p>{note.time}</p>
        </div>
        <button
          className="btn btn-outline-light position-open"
          onClick={() => history.push(`/${noteHistory}`)}
        >
          <i className="bi bi-book"/>
        </button>
        <button
          className="btn btn-outline-light position-remove"
          onClick={() => setModalActive(true)}
        >
          <i className={icon}/>
        </button>
        <ModalConfirmation
          active={modalActive}
          setActive={setModalActive}
          remove={removeNote}
          confirmationText={text}
          buttonText={buttonText}
        />
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.object,
  remove: PropTypes.func,
  noteHistory: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  buttonText: PropTypes.string
}

export default Note