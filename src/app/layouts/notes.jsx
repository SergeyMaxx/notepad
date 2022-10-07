import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import NotePage from '../components/page/notePage'
import NotesList from '../components/notesList'
import {useNote} from '../components/noteContext'

const Notes = () => {
  const {notes} = useNote()
  const {setNotes} = useNote()
  const {notesBasket} = useNote()
  const {setNotesBasket} = useNote()
  const {notesFavorites} = useNote()
  const {setNotesFavorites} = useNote()
  const params = useParams()
  const {noteId} = params
  const [searchText, setSearchText] = useState('')

  const arrColor = [
    'text-bg-primary',
    'text-bg-secondary',
    'text-bg-success',
    'text-bg-danger',
    'text-bg-info'
  ]

  const randomNum = () => Math.floor(Math.random() * arrColor.length)
  const index = arrColor.indexOf(arrColor[randomNum(0, arrColor.length - 1)])

  const addNote = (userInput, userInputHeader) => {
    if (userInput || userInputHeader) {
      const oldItem = {
        id: Math.random().toString(36).substr(2, 9),
        newNote: userInput,
        header: userInputHeader,
        noteColor: arrColor[index],
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        favoritesStatus: false
      }
      setNotes([...notes, oldItem])
    }
  }

  const editNote = (userInput, userInputHeader) => {
    const newItem = notes.find(note => note.id === noteId)
    newItem.header = userInputHeader
    newItem.newNote = userInput
    setNotes([...notes])
  }

  const removeNote = id => {
    setNotes([...notes.filter(note => note.id !== id)])
    setNotesBasket([...notesBasket, ...notes.filter(note => note.id === id)])
    setNotesFavorites([...notesFavorites.filter(note => note.id !== id)])
  }

  const favoritesToggle = id => {
    const newStatus = notes.find(note => note.id === id)
    newStatus.favoritesStatus = !newStatus.favoritesStatus
    setNotes([...notes])
  }

  const addFavoritesNote = id => {
    notes.find(note => note.id === id).favoritesStatus
      ? setNotesFavorites([...notesFavorites, notes.find(note => note.id === id)])
      : setNotesFavorites([...notesFavorites.filter(note => note.id !== id)])
  }

  return (
    <>
      {noteId
        ? <NotePage
          noteId={noteId}
          notes={notes}
          editNote={editNote}
        />
        : <NotesList
          addNote={addNote}
          notes={notes.filter(note => note.header.toLowerCase().includes(searchText))}
          removeNote={removeNote}
          setSearchText={setSearchText}
          addFavoritesNote={addFavoritesNote}
          favoritesToggle={favoritesToggle}
        />
      }
    </>
  )
}

export default Notes