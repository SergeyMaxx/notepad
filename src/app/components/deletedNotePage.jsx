import React from 'react'
import PropTypes from 'prop-types'
import '../CSS/note.css'
import {useHistory} from 'react-router-dom'

const DeletedNotePage = ({deletedNoteId, notesBasket}) => {
  const history = useHistory()
  const getById = notesBasket.find(note => note.id === deletedNoteId)

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
          onClick={() => history.push('/basket')}
          className="btn btn-secondary mt-5 position-all-notes"
        >
          <i className="bi bi-journals"/>
        </button>
        {/*<button*/}
        {/*  onClick={() => returnNote(getById.id)}*/}
        {/*  className="btn btn-secondary mx-2 position-edit-notes"*/}
        {/*>*/}
        {/*  <i className="bi bi-box-arrow-in-up-left"/>*/}
        {/*</button>*/}
      </div>
    </div>
  )
}

DeletedNotePage.propTypes = {
  deletedNoteId: PropTypes.string,
  notesBasket: PropTypes.array
}

export default DeletedNotePage