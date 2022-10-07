import React, {useState} from 'react'
import Note from './note'
import AddNote from './addNote'
import PropTypes from 'prop-types'
import SideBar from './sideBar'
import Search from './search'
import _ from 'lodash'

const NotesList = ({
                     addNote,
                     notes,
                     removeNote,
                     setSearchText,
                     favoritesToggle,
                     addFavoritesNote
                   }) => {

  const [sortBy, setSortBy] = useState({iter: 'date', order: 'asc'})
  const sortedNotes = _.orderBy(notes, [sortBy.iter], [sortBy.order])

  const handleSort = item => {
    if (sortBy.iter === item) {
      setSortBy(prevState => ({
        ...prevState,
        order: prevState.order === 'asc' ? 'desc' : 'asc'
      }))
    } else {
      setSortBy(prevState => ({
        ...prevState,
        order: prevState.order === 'desc' ? 'asc' : 'desc'
      }))
    }
  }

  return (
    <>
      <SideBar/>
      <div className="d-flex">
        <Search setSearchText={setSearchText}/>
        <button
          style={{marginLeft: 50, marginBottom: 25}}
          className="btn btn-secondary"
          onClick={() => handleSort('time')}
        >
          Сортировка по дате
        </button>
        <AddNote addNote={addNote}/>
      </div>
      <p style={{color: '#c2c2c2'}} className="text-center">
        Всего заметок : {notes.length}
      </p>
      <div className="container">
        <div
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
          style={{marginLeft: 16}}
        >
          {sortedNotes.map(note => (
            <React.Fragment key={note.id}>
              <Note
                noteHistory={note.id}
                note={note}
                remove={removeNote}
                text="Вы точно хотите удалить заметку ?"
                icon="bi bi-trash"
                buttonText="Удалить"
                favoritesToggle={favoritesToggle}
                optionFavoritesNote={addFavoritesNote}
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
  setSearchText: PropTypes.func,
  favoritesToggle: PropTypes.func,
  addFavoritesNote: PropTypes.func
}

export default NotesList