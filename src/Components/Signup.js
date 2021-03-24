import React from 'react'
import styled from 'styled-components'

import { Title } from './Text'
import { Input } from './Layout'

const Signup = ({...props}) => {
  const LoginWrapper = styled.div`
    margin: 50px 0;
    width: 100;
  `

  const signUp = () => {

  }

  const handleClick = (e) => {
    e.preventDefault()
    signUp()
  }
  
  return (
    <LoginWrapper>
      <Title>Ny på platformen?</Title>
      <Input type={"input"} name={"firstName"} placeholder={"Fornavn"}/>
      <Input type={"input"} name={"lastName"} placeholder={"Efternavn"}/>
      <Input type={"input"} name={"email"} placeholder={"Email"}/>
      <Input type={"input"} name={"phone"} placeholder={"Telefon"}/>
      <Input type={"button"} onClick={handleClick} value={"Registrer"}/>  

    </LoginWrapper>
  )
}

export default Signup