import React from 'react'
import styled from 'styled-components'

export const Tile = ({...props}) => {
  console.log(props)
  const TileWrapper = styled.div`
    padding: 40px;
    margin: 40px;
    min-height: 300px;
    max-height: 80vh;
    min-width: 300px;
    border-radius: 50px;
    background-color: white;
    filter: drop-shadow(0 0 10px #555);
  `
  const TileTitle = styled.h2`
    font-family: Helvetica;
  `

  const TileParagraph = styled.p`

  `
  return (
    <TileWrapper>
      <TileTitle>{props.event.name}</TileTitle>
      <TileParagraph>{props.event.description}</TileParagraph>
    </TileWrapper>
  )
}