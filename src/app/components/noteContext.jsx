import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const NoteContext = React.createContext(null)

export const useNote = () => useContext(NoteContext)

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState(JSON.parse(
    localStorage.getItem('notes-react')) || []
  )

  const [notesBasket, setNotesBasket] = useState(JSON.parse(
    localStorage.getItem('notesBasket-react')) || [])

  useEffect(() => {
    localStorage.setItem('notes-react', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem('notesBasket-react', JSON.stringify(notesBasket))
  }, [notesBasket])

  return (
    <NoteContext.Provider value={{
      notes,
      setNotes,
      notesBasket,
      setNotesBasket
    }}>
      {children}
    </NoteContext.Provider>
  )
}

NoteProvider.propTypes = {
  children: PropTypes.object
}

export default NoteProvider