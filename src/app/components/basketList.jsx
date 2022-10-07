import React, {useState} from 'react'
import SideBar from './sideBar'
import Note from './note'
import Search from './search'
import '../CSS/basket.css'
import {useNote} from './noteContext'
import ModalConfirmation from './modalConfirmation'

const BasketList = () => {
  const [searchText, setSearchText] = useState('')
  const [modalActive, setModalActive] = useState(false)
  const {notes} = useNote()
  const {setNotes} = useNote()
  const {setNotesBasket} = useNote()
  const {notesBasket} = useNote()
  const {notesFavorites} = useNote()
  const {setNotesFavorites} = useNote()

  const returnNote = id => {
    setNotes([...notes, ...notesBasket.filter(note => note.id === id)])
    setNotesBasket([...notesBasket.filter(note => note.id !== id)])
    setNotesFavorites([...notesFavorites, ...notesBasket.filter(note => note.id === id)])
  }

  const removeAll = () => {
    setModalActive(false)
    setNotesBasket([])
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
        <div
          className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3"
          style={{marginLeft: 16}}
        >
          {notesBasket.filter(note => note.header.toLowerCase().includes(searchText))
            .map(note => (
              <React.Fragment key={note.id}>
                <Note
                  noteHistory={`basket/${note.id}`}
                  note={note}
                  remove={returnNote}
                  text="Точно хотите восстановить заметку ?"
                  icon="bi bi-box-arrow-in-up-left"
                  buttonText="Восстановить"
                />
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  )
}

export default BasketList