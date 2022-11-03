import React, {useState} from 'react'
import '../CSS/sideBar.css'
import {useHistory} from 'react-router-dom'

const SideBar = () => {
  const history = useHistory()
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <>
      <div
        className={showSideBar ? 'menu-icon open' : 'menu-icon'}
        id="menu-icon"
        onClick={() => setShowSideBar(prevState => !prevState)}
      >
        <div className="menu-bar">
          <div className="bar1">{''}</div>
          <div className="bar2">{''}</div>
          <div className="bar3">{''}</div>
        </div>
        <div id="end-nav" className="navigation">
          <button className="link" onClick={() => history.push('/')}>
            <i className="bi bi-book me-3"/>
            Заметки
          </button>
          <button className="link" onClick={() => history.push('/favorites')}>
            <i className="bi bi-heart me-3"/>
            Избранное
          </button>
          <button className="link" onClick={() => history.push('/basket')}>
            <i className="bi bi-trash me-3"/>
            Корзина
          </button>
          <button className="link" onClick={() => ''}>
            <i className="bi bi-moon me-3"/>
            Тема
            <label className="rainbow-checkbox">
              <input type="checkbox"/>
              <span> </span>
            </label>
          </button>
        </div>
      </div>
    </>
  )
}

export default SideBar