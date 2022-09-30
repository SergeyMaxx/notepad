import React, {useEffect, useState} from 'react'
import '../CSS/styleSignIn.css'
import {useHistory} from 'react-router-dom'
import {validator} from '../utils/validator'

const Register = () => {
  const history = useHistory()
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const validatorConfig = {
    email: {
      isEmail: {message: 'Email entered incorrectly'}
    },
    name: {
      min: {
        message: 'Name must contain at least 3 characters',
        value: 3
      }
    },
    password: {
      isCapitalSymbol: {message: 'Password must contain a capital letter'},
      isContainDigit: {message: 'Password must contain a number'},
      min: {
        message: 'Password must contain at least 8 characters',
        value: 8
      }
    }
  }

  const handleChange = target => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const onChange = ({target}) => {
    handleChange({name: target.name, value: target.value})
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length !== 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) return
    console.log(data)
  }

  return (
    <div className="body">
      <div className="box" style={{height: 580, width: 419}}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2 className="h2">Registration</h2>
          <div className="inputBox">
            <input
              name="name"
              id="name"
              type="text"
              value={data.name}
              required="required"
              onChange={onChange}
              className={'form-control' + (errors.name ? ' is-invalid' : '')}
            />
            <span>Username</span>
            <i/>
          </div>
          {errors.name}
          <div className="inputBox">
            <input
              name="email"
              id="email"
              type="text"
              value={data.email}
              required="required"
              onChange={onChange}
              className={'form-control' + (errors.email ? ' is-invalid' : '')}
            />
            <span>Email</span>
            <i/>
          </div>
          {errors.email}
          <div className="inputBox">
            <input
              name="password"
              id="password"
              type="password"
              value={data.password}
              required="required"
              onChange={onChange}
              className={'form-control' + (errors.password ? ' is-invalid' : '')}
            />
            <span>Password</span>
            <i/>
          </div>
          {errors.password}
          <div className="links">
            <p>Already have account?</p>
            <a onClick={() => history.push('/signIn')}>
              Sign in
            </a>
          </div>
          <input type="submit" value="Register"/>
        </form>
      </div>
    </div>
  )
}

export default Register