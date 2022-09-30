import React from 'react'
import PropTypes from 'prop-types'
import '../CSS/note.css'
import {useHistory} from 'react-router-dom'

const Note = ({note, remove}) => {
  const history = useHistory()

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
        <p style={{marginBottom: 0}}>{note.date}</p>
        <button
          className="btn btn-outline-light position-open"
          onClick={() => history.push(`/${note.id}`)}
        >
          <i className="bi bi-book"/>
        </button>
        <button
          className="btn btn-outline-light position-remove"
          onClick={() => remove(note.id)}
        >
          <i className="bi bi-trash"/>
        </button>
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.object,
  remove: PropTypes.func
}

export default Note