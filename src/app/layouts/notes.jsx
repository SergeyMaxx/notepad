import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import NotePage from '../components/notePage'
import NotesList from '../components/notesList'

const Notes = () => {
  const params = useParams()
  const {noteId} = params
  const [notes, setNotes] = useState([])
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

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-react'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes-react', JSON.stringify(notes))
  }, [notes])

  const addNote = (userInput, userInputHeader) => {
    if (userInput || userInputHeader) {
      const oldItem = {
        id: Math.random().toString(36).substr(2, 9),
        newNote: userInput,
        header: userInputHeader,
        noteColor: arrColor[index],
        date: new Date().toLocaleDateString()
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
        />
      }
    </>
  )
}

export default Notes