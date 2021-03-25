import React from 'react'
import logo from '../pwc-logo.png'

import Signup from './Signup'
import Login from './Login'
import UserPanel from './UserPanel'

import { SidebarWrapper } from './Layout'
import { Logo } from './Layout'


export const Sidebar = ({...props}) => {
  
  return (
    <SidebarWrapper>
      <Logo src={logo} />
      {!props.loggedIn && (
        <>
          <Signup setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
          <Login setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
        </>
      )}
      {props.loggedIn && (
        <UserPanel user={props.user} setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
      )}
    </SidebarWrapper>
  )
}