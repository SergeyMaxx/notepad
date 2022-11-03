import React, {useState} from 'react'
import SideBar from './sideBar'
import Search from './search'
import '../CSS/basket.css'
import ModalConfirmation from './modalConfirmation'
import {useDispatch, useSelector} from 'react-redux'
import {getBasketNotes, noteDeleteAll} from '../Store/notes'
import NoteBasket from './notes/noteBasket'

const BasketList = () => {
  const [searchText, setSearchText] = useState('')
  const [modalActive, setModalActive] = useState(false)
  const notesBasket = useSelector(getBasketNotes())
  const dispatch = useDispatch()

  const removeAll = () => {
    setModalActive(false)
    dispatch(noteDeleteAll())
  }

  return (
    <>
      <button className="button-delete" onClick={() => setModalActive(true)}>
        Очистить корзину
      </button>
      <ModalConfirmation
        active={modalActive}
        setActive={setModalActive}
        remove={removeAll}
        confirmationText="Вы точно хотите очистить корзину ?"
        buttonText="Очистить"
      />
      <SideBar/>
      <div className="d-flex">
        <Search setSearchText={setSearchText}/>
        <h1 className="h-center" style={{margin: '20px 10px 0 0'}}>
          Корзина
        </h1>
        <p className="text-center h-center" style={{margin: '42px 0 0 10px'}}>
          Всего заметок : {notesBasket.length}
        </p>
      </div>
      <div className="container list">
        <div className="row">
          {notesBasket.filter(note => note.header.toLowerCase().includes(searchText))
            .map(note => (
              <div className="col mb-3" key={note.id}>
                <NoteBasket note={note}/>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default BasketList