import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import NotePage from '../components/page/notePage'
import NotesList from '../components/notesList'
import {useSelector} from 'react-redux'
import {getBasketNotes, getFavoritesNotes, getNotes,} from '../Store/notes'

const Notes = () => {
  const notes = useSelector(getNotes())
  const notesBasket = useSelector(getBasketNotes())
  const notesFavorites = useSelector(getFavoritesNotes())
  const params = useParams()
  const {noteId} = params

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
      {noteId ? <NotePage/> : <NotesList/>}
    </>
  )
}

export default Notes