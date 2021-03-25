import React from 'react'
import styled from 'styled-components'

export const Row = ({children}) => {
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 96vh;
  `

  return (
    <Row>{children}</Row>
  )
}

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 5px 0;
  padding: 5px;
  `

export const SidebarWrapper = styled.div`
  height: 100%;
  width: 250px;
  padding: 20px 50px;
  margin-right: 40px;
  filter: drop-shadow(0 0 10px #FFF);
  background: rgb(211,83,10);
  background: linear-gradient(0deg, rgba(211,83,10,1) 0%, rgba(255,255,255,1) 78%);

  `
export const Logo = styled.img`
  width: 100%;
  width: 250px;
  height: auto;
`

export const LoginWrapper = styled.div`
  margin: 50px 0;
  width: 100;
`

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 40px;
  min-height: 300px;
  max-height: 80vh;
  min-width: 300px;
  border-radius: 50px;
  background-color: white;
  filter: drop-shadow(0 0 10px #555);
`

export const UserPanelWrapper = styled.div`
  margin: 50px 0;
  width: 100;
`

export const Group = styled.div`
  width: 100%;
`
export const EndGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`