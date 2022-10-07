import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../../CSS/note.css'
import {useHistory} from 'react-router-dom'
import EditNoteModal from '../editNoteModal'

const FavoritesPage = ({favoritesNoteId, notesFavorites, editNote}) => {
  const [modalActive, setModalActive] = useState(false)
  const history = useHistory()
  const getById = notesFavorites.find(note => note.id === favoritesNoteId)

  return (
    <div
      className={
        `container card center relative-card w-50 mt-5 ${getById.noteColor} bg-opacity-50`
      }
      style={{
        height: 500,
        boxShadow: '7px 7px 15px gray',
        borderRadius: 10
      }}
    >
      <div className="card-body ">
        <h1 className="center container text-decoration-underline">
          {getById.header}
        </h1>
        <p className="container card-text panel-big">
          {getById.newNote}
        </p>
        <button
          onClick={() => history.push('/favorites')}
          className="btn btn-secondary mt-5 position-all-notes"
        >
          <i className="bi bi-journals"/>
        </button>
        <button
          onClick={() => setModalActive(true)}
          className="btn btn-secondary mx-2 position-edit-notes"
        >
          <i className="bi bi-pencil-square"/>
        </button>
        <EditNoteModal
          active={modalActive}
          setActive={setModalActive}
          valueHeader={getById.header}
          valueNote={getById.newNote}
          editNote={editNote}
        />
      </div>
    </div>
  )
}

FavoritesPage.propTypes = {
  favoritesNoteId: PropTypes.string,
  notesFavorites: PropTypes.array,
  editNote: PropTypes.func
}

export default FavoritesPage