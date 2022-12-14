import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import FavoritesPage from '../components/page/favoritesPage'
import FavoritesList from '../components/favoritesList'
import {useSelector} from 'react-redux'
import {getBasketNotes, getFavoritesNotes, getNotes} from '../Store/notes'

const FavoritesNotes = () => {
  const notes = useSelector(getNotes())
  const notesBasket = useSelector(getBasketNotes())
  const notesFavorites = useSelector(getFavoritesNotes())
  const params = useParams()
  const {favoritesNoteId} = params

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
    <>
      {favoritesNoteId ? <FavoritesPage/> : <FavoritesList/>}
    </>
  )
}

export default FavoritesNotes