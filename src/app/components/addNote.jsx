import React, {useState} from 'react'
import Modal from './modal'

const AddNote = () => {
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
      />
    </div>
  )
}

export default AddNote