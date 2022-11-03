import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../../CSS/note.css'
import {useHistory} from 'react-router-dom'
import ModalConfirmation from '../modalConfirmation'
import {addFavorites, noteDelete, toggleFavorites} from '../../Store/notes'
import {useDispatch} from 'react-redux'

const Note = ({note}) => {
  const history = useHistory()
  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch()

  const removeNote = () => {
    setModalActive(false)
    dispatch(noteDelete({id: note.id}))
  }

  const favoritesToggle = () => {
    dispatch(toggleFavorites({id: note.id}))
    dispatch(addFavorites({id: note.id}))
  }

  return (
    <div
      className={`card ${note.noteColor} card-hover`}
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
          onClick={() => history.push(`/${note.id}`)}
        >
          <i className="bi bi-book"/>
        </button>
        <button
          className="btn btn-outline-light position-favorites"
          onClick={favoritesToggle}
        >
          <i className={note.favoritesStatus ? 'bi bi-heart-fill' : 'bi bi-heart'}/>
        </button>
        <button
          className="btn btn-outline-light position-remove"
          onClick={() => setModalActive(true)}
        >
          <i className="bi bi-trash"/>
        </button>
        <ModalConfirmation
          active={modalActive}
          setActive={setModalActive}
          remove={removeNote}
          confirmationText="Вы точно хотите удалить заметку ?"
          buttonText="Удалить"
        />
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.object
}

export default Note