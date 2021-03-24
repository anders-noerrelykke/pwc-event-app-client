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
  `