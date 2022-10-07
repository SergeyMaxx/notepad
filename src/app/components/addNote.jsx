import React, {useState} from 'react'
import Modal from './modal'
import PropTypes from 'prop-types'

const AddNote = ({addNote}) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="d-flex mt-2">
      <button
        style={{marginLeft: 30, background: '#273746'}}
        className="link"
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
  addNote: PropTypes.func
}

export default AddNote