import React, {useState} from 'react'
import '../../CSS/note.css'
import {useHistory, useParams} from 'react-router-dom'
import EditNoteModal from '../editNoteModal'
import {change, getNotes} from '../../Store/notes'
import {useDispatch, useSelector} from 'react-redux'

const NotePage = () => {
  const notes = useSelector(getNotes())
  const [modalActive, setModalActive] = useState(false)
  const history = useHistory()
  const params = useParams()
  const {noteId} = params
  const dispatch = useDispatch()

  const getById = notes.find(note => note.id === noteId)

  const editNote = (userInput, userInputHeader) => {
    dispatch(change({
      id: noteId,
      newNote: userInput,
      header: userInputHeader
    }))
  }

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
          onClick={() => history.push('/')}
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

export default NotePage