import React from 'react'
import {useParams} from 'react-router-dom'
import {useNote} from '../components/noteContext'
import FavoritesPage from '../components/page/favoritesPage'
import FavoritesList from '../components/favoritesList'

const FavoritesNotes = () => {
  const {notes} = useNote()
  const {setNotes} = useNote()
  const {notesFavorites} = useNote()
  const {setNotesFavorites} = useNote()
  const params = useParams()
  const {favoritesNoteId} = params

  const editNote = (userInput, userInputHeader) => {
    const newItem = notesFavorites.find(note => note.id === favoritesNoteId)
    newItem.header = userInputHeader
    newItem.newNote = userInput
    setNotesFavorites([...notesFavorites])
    setNotes([...notes])
  }

  return (
    <>
      {favoritesNoteId
        ? <FavoritesPage
          favoritesNoteId={favoritesNoteId}
          notesFavorites={notesFavorites}
          editNote={editNote}
        />
        : <FavoritesList/>
      }
    </>
  )
}

export default FavoritesNotes