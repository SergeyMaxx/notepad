import React, {useState} from 'react'
import Modal from './modal'
import PropTypes from 'prop-types'
import Search from './search'

const AddNote = ({addNote, setSearchText}) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="d-flex mt-3">
      <Search setSearchText={setSearchText}/>
      <button
        style={{margin: '10px 135px 0 170px'}}
        className="btn btn-outline-dark h-25"
        onClick={() => setModalActive(true)}
      >
        <i className="bi bi-plus-square"/>
      </button>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        addNote={addNote}
      />
    </div>

  )
}

AddNote.propTypes = {
  addNote: PropTypes.func,
  setSearchText: PropTypes.func
}

export default AddNote