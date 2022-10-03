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
          <button className="link" onClick={() => history.push('/')}>Notes</button>
          <button className="link" onClick={() => ''}>Новое</button>
          <button className="link" onClick={() => ''}>Избранное</button>
          <button className="link" onClick={() => history.push('/basket')}>
            Корзина
          </button>
          <button className="link" onClick={() => ''}>Тема</button>
        </div>
      </div>
    </>
  )
}

export default SideBar