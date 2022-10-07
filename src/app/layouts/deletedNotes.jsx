import React from 'react'
import {useParams} from 'react-router-dom'
import BasketList from '../components/basketList'
import DeletedNotePage from '../components/page/deletedNotePage'
import {useNote} from '../components/noteContext'

const DeletedNotes = () => {
  const {notesBasket} = useNote()
  const params = useParams()
  const {deletedNoteId} = params

  return (
    <>
      {deletedNoteId
        ? <DeletedNotePage
          deletedNoteId={deletedNoteId}
          notesBasket={notesBasket}
        />
        : <BasketList/>
      }
    </>
  )
}

export default DeletedNotes