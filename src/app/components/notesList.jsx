import React from 'react'
import Note from './note'
import AddNote from './addNote'
import PropTypes from 'prop-types'

const NotesList = ({addNote, notes, removeNote, setSearchText}) => {

  return (
    <>
      <AddNote addNote={addNote} setSearchText={setSearchText}/>
      <p style={{textAlign: 'center'}}>Всего заметок : {notes.length}</p>
      <div className="container">
        <div
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
          style={{marginLeft: 16}}
        >
          {notes.map(note => (
            <React.Fragment key={note.id}>
              <Note
                note={note}
                id={note.id}
                remove={removeNote}
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