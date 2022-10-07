import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const NoteContext = React.createContext(null)
export const useNote = () => useContext(NoteContext)

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState(JSON.parse(
    localStorage.getItem('notes-react')) || [])

  const [notesBasket, setNotesBasket] = useState(JSON.parse(
    localStorage.getItem('notesBasket-react')) || [])

  const [notesFavorites, setNotesFavorites] = useState(JSON.parse(
    localStorage.getItem('notesFavorites-react')) || [])

  useEffect(() => {
    localStorage.setItem('notes-react', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('notesBasket-react', JSON.stringify(notesBasket))
  }, [notesBasket])

  useEffect(() => {
    localStorage.setItem('notesFavorites-react', JSON.stringify(notesFavorites))
  }, [notesFavorites])

  return (
    <NoteContext.Provider value={{
      notes,
      setNotes,
      notesBasket,
      setNotesBasket,
      notesFavorites,
      setNotesFavorites
    }}>
      {children}
    </NoteContext.Provider>
  )
}

NoteProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default NoteProvider