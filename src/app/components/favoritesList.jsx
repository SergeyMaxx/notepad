import React, {useState} from 'react'
import SideBar from './sideBar'
import Search from './search'
import '../CSS/favorites.css'
import NoteFavorites from './notes/noteFavorites'
import {useSelector} from 'react-redux'
import {getFavoritesNotes} from '../Store/notes'

const FavoritesList = () => {
  const [searchText, setSearchText] = useState('')
  const notesFavorites = useSelector(getFavoritesNotes())

  return (
    <>
      <SideBar/>
      <div className="d-flex">
        <Search setSearchText={setSearchText}/>
        <h1 className="h-center" style={{margin: '20px 10px 0 0'}}>
          Избранное
        </h1>
        <p className="text-center h-center" style={{margin: '42px 0 0 10px'}}>
          Всего заметок : {notesFavorites.length}
        </p>
      </div>
      <div className="container list">
        <div className="row">
          {notesFavorites.filter(note => note.header.toLowerCase().includes(searchText))
            .map(note => (
              <div className="col mb-3" key={note.id}>
                <NoteFavorites note={note}/>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default FavoritesList