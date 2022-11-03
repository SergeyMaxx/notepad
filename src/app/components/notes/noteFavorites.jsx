import React from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {favoritesOff, removeFavorites} from '../../Store/notes'
import {useDispatch} from 'react-redux'

const NoteFavorites = ({note}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const toggleFavorites = () => {
    dispatch(favoritesOff({id: note.id}))
    dispatch(removeFavorites({id: note.id}))
  }

  return (
    <div
      className={`card ${note.noteColor} card-hover col`}
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
          onClick={() => history.push(`/favorites/${note.id}`)}
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
  note: PropTypes.object
}

export default NoteFavorites