import React, {useState} from 'react'
import '../CSS/styleSignIn.css'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({target}) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
  }

  const toggleFormType = () => {
    history.push('/signUp')
  }

  return (
    <div className="body">
      <div className="box">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2 className="h2">Sign in</h2>
          <div className="inputBox">
            <input
              name="email"
              type="text"
              value={data.email}
              required="required"
              onChange={handleChange}
            />
            <span>Email</span>
            <i/>
          </div>
          <div className="inputBox">
            <input
              name="password"
              type="password"
              value={data.password}
              required="required"
              onChange={handleChange}
            />
            <span>Password</span>
            <i/>
          </div>
          <div className="links">
            <p>{'Don\'t have account?'}</p>
            <a onClick={toggleFormType}>Sign up</a>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    </div>
  )
}

export default Login