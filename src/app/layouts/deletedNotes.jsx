import React from 'react'
import {useParams} from 'react-router-dom'
import BasketList from '../components/basketList'
import DeletedNotePage from '../components/page/deletedNotePage'

const DeletedNotes = () => {
  const params = useParams()
  const {deletedNoteId} = params

  return (
    <>
      {deletedNoteId ? <DeletedNotePage/> : <BasketList/>}
    </>
  )
}

export default DeletedNotes