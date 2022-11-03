import React, {useState} from 'react'
import Note from './notes/note'
import AddNote from './addNote'
import SideBar from './sideBar'
import Search from './search'
import _ from 'lodash'
import {useSelector} from 'react-redux'
import {getNotes} from '../Store/notes'

const NotesList = () => {
  const notes = useSelector(getNotes())
  const [searchText, setSearchText] = useState('')
  const [sortBy, setSortBy] = useState({iter: 'date', order: 'asc'})

  const notesSearch = notes.filter(note => note.header.toLowerCase().includes(searchText))
  const sortedNotes = _.orderBy(notesSearch, [sortBy.iter], [sortBy.order])

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
        <AddNote/>
      </div>
      <p style={{color: '#c2c2c2'}} className="text-center">
        Всего заметок : {notes.length}
      </p>
      <div className="container">
        <div className="row">
          {sortedNotes.map(note => (
            <div className="col mb-3" key={note.id}>
              <Note note={note}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NotesList