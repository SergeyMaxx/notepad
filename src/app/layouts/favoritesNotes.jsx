import React from 'react'
import {useParams} from 'react-router-dom'
import FavoritesPage from '../components/page/favoritesPage'
import FavoritesList from '../components/favoritesList'

const FavoritesNotes = () => {
  const params = useParams()
  const {favoritesNoteId} = params

  return (
    <>
      {favoritesNoteId ? <FavoritesPage/> : <FavoritesList/>}
    </>
  )
}

export default FavoritesNotes