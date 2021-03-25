import React from 'react'

import { Title, Ul, Li } from './Text'

const Participants = ({...props}) => {
  const convertIdToUser = (id) => {
    if(props.users) {
      var obj = props.users.find(user => user.id === id)
      if(obj) return `${obj.firstName || null} ${obj.lastName || null} (${obj.email})` || null 
    }
  }

  return (
    <>
    <Title>Deltagere:</Title>
    <Ul>
      {props.participants.map((participant, i) => (
        <Li key={i}>{convertIdToUser(participant)}</Li>
      ))}
    </Ul>
    </>
  )
}

export default Participants