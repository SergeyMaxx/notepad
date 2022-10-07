import React, {useState} from 'react'
import {useNote} from './noteContext'
import SideBar from './sideBar'
import Search from './search'
import Note from './note'
import '../CSS/favorites.css'
import NoteFavorites from './noteFavorites'

const FavoritesList = () => {
  const [searchText, setSearchText] = useState('')
  const {notes} = useNote()
  const {setNotes} = useNote()
  const {notesFavorites} = useNote()
  const {setNotesFavorites} = useNote()

  const notesFavoritesOff = id => {
    const newStatusFavorites = notesFavorites.find(note => note.id === id)
    newStatusFavorites.favoritesStatus = !newStatusFavorites.favoritesStatus
    setNotesFavorites([...notesFavorites])
    setNotes([...notes])
  }

  const deleteFavoritesNote = id => {
    setNotesFavorites([...notesFavorites.filter(note => note.id !== id)])
  }

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
        <div
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
          style={{marginLeft: 16}}
        >
          {notesFavorites.filter(note => note.header.toLowerCase().includes(searchText))
            .map(note => (
              <React.Fragment key={note.id}>
                <NoteFavorites
                  note={note}
                  noteHistory={`favorites/${note.id}`}
                  favoritesToggle={notesFavoritesOff}
                  optionFavoritesNote={deleteFavoritesNote}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  )
}

export default FavoritesList