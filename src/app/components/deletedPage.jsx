import React from 'react'
import {useParams} from 'react-router-dom'
import Basket from './basket'
import DeletedNotePage from './deletedNotePage'
import {useNote} from './noteContext'

const DeletedPage = () => {
  const {notesBasket} = useNote()
  const {setNotesBasket} = useNote()
  const params = useParams()
  const {deletedNoteId} = params

  return (
    <>
      {deletedNoteId
        ? <DeletedNotePage
          deletedNoteId={deletedNoteId}
          notesBasket={notesBasket}
          setNotesBasket={setNotesBasket}
        />
        : <Basket/>
      }
    </>
  )
}

export default DeletedPage