import React from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

const NoteFavorites = ({note, noteHistory, favoritesToggle, optionFavoritesNote}) => {
  const history = useHistory()

  const toggleFavorites = () => {
    favoritesToggle(note.id)
    optionFavoritesNote(note.id)
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
          className="btn btn-outline-light position-favorites"
          onClick={toggleFavorites}
        >
          <i className={note.favoritesStatus ? 'bi bi-heart-fill' : 'bi bi-heart'}/>
        </button>
      </div>
    </div>
  )
}

NoteFavorites.propTypes = {
  note: PropTypes.object,
  noteHistory: PropTypes.string,
  optionFavoritesNote: PropTypes.func,
  favoritesToggle: PropTypes.func
}

export default NoteFavorites