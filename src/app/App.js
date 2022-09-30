import React from 'react'
import NavBar from './components/navBar'
import {Redirect, Route, Switch} from 'react-router-dom'
import Register from './layouts/register'
import Notes from './layouts/notes'
import Login from './layouts/login'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/signIn" component={Login}/>
        <Route path="/signUp" component={Register}/>
        <Route path="/:noteId?" component={Notes}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  )
}

export default App