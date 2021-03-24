import React from 'react'
import styled from 'styled-components'
import logo from '../pwc-logo.png'

import Signup from './Signup'
import Login from './Login'


export const Sidebar = ({...props}) => {
  console.log(props)
  const SidebarWrapper = styled.div`
    height: 100%;
    width: 300px; 
    padding: 20px 50px;
    margin-right: 40px;
    filter: drop-shadow(0 0 10px #FFF);
    background: rgb(211,83,10);
    background: linear-gradient(0deg, rgba(211,83,10,1) 0%, rgba(255,255,255,1) 78%);

  `
  const Logo = styled.img`
    width: 100%;
    height: auto;
  `
  return (
    <SidebarWrapper>
      <Logo src={logo} />
      {props.loggedIn && (
        <>
          <Signup/>
          <Login/>
        </>
      )}
      {!props.loggedIn && (
        <p>hey!</p>
      )}
    </SidebarWrapper>
  )
}