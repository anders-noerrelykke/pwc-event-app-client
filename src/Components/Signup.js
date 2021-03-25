import React, { useState } from 'react'
import { post } from '../utils'

import { Title } from './Text'
import { Input } from './Layout'

import { LoginWrapper } from './Layout'

const Signup = ({...props}) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const register = () => {
    post('/user/register', newUser).then(response => {
      console.log(response)
      if(response.status === 200) {
        props.setUser(response.user)
        props.setLoggedIn(true)
      }
    })
  }
  
  return (
    <LoginWrapper>
      <Title>Ny på platformen?</Title>
      <Input type={"input"} name={"firstName"} placeholder={"Fornavn"} value={newUser.firstName} onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})}/>
      <Input type={"input"} name={"lastName"} placeholder={"Efternavn"} value={newUser.lastName} onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})}/>
      <Input type={"input"} name={"email"} placeholder={"Email"} value={newUser.email} onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})}/>
      <Input type={"input"} name={"phone"} placeholder={"Telefon"} value={newUser.phone} onChange={e => setNewUser({...newUser, [e.target.name]: e.target.value})}/>
      <Input type={"button"} value={"Registrer"} onClick={register}/>  
    </LoginWrapper>
  )
}

export default Signup