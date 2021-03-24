import React from 'react'
import styled from 'styled-components'

import { Title } from './Text'
import { Input } from './Layout'

const Login = ({...props}) => {
  const LoginWrapper = styled.div`
    margin: 50px 0;
    width: 100;
  `

  const logIn = () => {

  }

  const handleClick = (e) => {
    e.preventDefault()
  }
  
  return (
    <LoginWrapper>
      <Title>Allerde registreret?</Title>
      <Input type={"input"} name={"email"} placeholder={"Email"}/>
      <Input type={"button"} onClick={handleClick} value={"Log ind"}/>  

    </LoginWrapper>
  )
}

export default Login