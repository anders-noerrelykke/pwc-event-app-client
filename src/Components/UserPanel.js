import React from 'react'

import { Title, Label, Paragraph } from './Text'
import { UserPanelWrapper, Group, Input } from './Layout'

const UserPanel = ({...props}) => {
  
  const logOut = () => {
    localStorage.removeItem('pwcEmail')
    props.setLoggedIn(false)
    props.setUser({})
  }

  return (
    <UserPanelWrapper>
      <Title>Velkommen</Title>
      <Group>
        <Label htmlFor={"name"}>Navn:</Label>
        <Paragraph name={"name"}>{props?.user?.firstName || ""} {props?.user?.lastName || ""}</Paragraph>
      </Group>
      <Group>
        <Label htmlFor={"email"}>Email:</Label>
        <Paragraph name={"email"}>{props?.user?.email || ""}</Paragraph>
      </Group>
      <Group>
        <Label htmlFor={"phone"}>Telefon:</Label>
        <Paragraph name={"phone"}>{props?.user?.phone || ""}</Paragraph>
      </Group>
      <Input type={"button"} value={"Log ud"} onClick={logOut}></Input>
    </UserPanelWrapper>
  )
}

export default UserPanel