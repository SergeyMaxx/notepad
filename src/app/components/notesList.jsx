import React from 'react'
import Note from './note'
import AddNote from './addNote'
import PropTypes from 'prop-types'
import SideBar from './sideBar'
import Search from './search'

const NotesList = ({addNote, notes, removeNote, setSearchText}) => {
  return (
    <>
      <SideBar/>
      <div className="d-flex">
        <Search setSearchText={setSearchText}/>
        <AddNote addNote={addNote}/>
      </div>
      <p className="text-center">Всего заметок : {notes.length}</p>
      <div className="container">
        <div
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
          style={{marginLeft: 16}}
        >
          {notes.map(note => (
            <React.Fragment key={note.id}>
              <Note
                noteHistory={note.id}
                note={note}
                remove={removeNote}
                text="Вы точно хотите удалить заметку ?"
                icon="bi bi-trash"
                buttonText="Удалить"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

NotesList.propTypes = {
  addNote: PropTypes.func,
  notes: PropTypes.array,
  removeNote: PropTypes.func,
  setSearchText: PropTypes.func
}

export default NotesList