import React, { useState } from 'react'
import { post } from '../utils'

import { Title } from './Text'
import { Input } from './Layout'

import { LoginWrapper } from './Layout'

const Login = ({...props}) => {
  const [newEmail, setNewEmail] = useState('')

  const logIn = () => {
    post('/user/get', {email: newEmail}).then(response => {
      if(response.status === 200) {
        props.setUser(response.user)
        props.setLoggedIn(true)
        localStorage.setItem('pwcEmail', response.user.email)
      }
    })
  }
  
  return (
    <LoginWrapper>
      <Title>Allerde registreret?</Title>
      <Input type={"input"} name={"email"} placeholder={"Email"} value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
      <Input type={"button"} onClick={logIn} value={"Log ind"}/>  

    </LoginWrapper>
  )
}

export default Login