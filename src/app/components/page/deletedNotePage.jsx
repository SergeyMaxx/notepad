import React from 'react'
import '../../CSS/note.css'
import {useHistory, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getBasketNotes} from '../../Store/notes'

const DeletedNotePage = () => {
  const notesBasket = useSelector(getBasketNotes())
  const history = useHistory()
  const params = useParams()
  const {deletedNoteId} = params

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
      </div>
    </div>
  )
}

export default DeletedNotePage