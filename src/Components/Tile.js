import React from 'react'
import Participants from './Participants'
import { post } from '../utils'

import { Input, TileWrapper, Group } from './Layout'
import { TileTitle, TileParagraph, Label } from './Text'

export const Tile = ({...props}) => {

  const signUpForEvent = () => {
    if(props.event.participants.indexOf(props.user.id) === -1) {
      post('/userEvent/signUp', {user: props.user, event: props.event}).then(response => {
        window.location.reload(false)
      })
    }else {
      console.warn("Du er allerede tilmeldt dette event!")
    }
  }

  return (
    <TileWrapper>
      <Group>
        <TileTitle>{props.event.name}</TileTitle>
        <Label>{new Date(props.event.date).toString()}</Label>
        <TileParagraph>{props.event.description}</TileParagraph>
      </Group>
      <Group>
        {props.loggedIn && (
          <Input type={"button"} value={"Tilmeld"} onClick={signUpForEvent}></Input>
        )}
        {!props.loggedIn && (
          <Input type={"button"} value={"Log ind for at tilmelde dig"} disabled></Input>
        )}
      </Group>
      <Group>
        {props.event.participants.length && props.users && (
          <Participants users={props.users} participants={props.event.participants}/>
        )}
      </Group>
    </TileWrapper>
  )
}