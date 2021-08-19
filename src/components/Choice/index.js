import React from 'react'
import styled from 'styled-components'
import { useGameContext } from '../../context/gameContext'

export default function Choice ({ icon, alt, grid, bg, shadow, choice, allowClick }) {
  const { setUserChoice } = useGameContext()
  return (
    <ButtonChoice grid={grid} onClick={allowClick ? () => setUserChoice(choice) : null} allowClick={allowClick}>
      <ContainerChoice bg={bg} shadow={shadow}>
        <img src={icon} alt={alt} />
      </ContainerChoice>
    </ButtonChoice>
  )
}

const ButtonChoice = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: ${props => props.allowClick ? 'pointer' : ''};
  grid-area: ${props => props.grid};
`
const ContainerChoice = styled.div`
background-color: white;
height: 10rem;
width: 10rem;
border-radius: 50%;
display: grid;
place-items: center;
position: relative;
box-shadow: inset 0 9px rgba(0,0,0,0.2);
&::before{
    content: '';
    position: absolute;
    top: -15%;
    left: -15%;
    width: 130%;
    height: 130%;
    background: linear-gradient(${props => props.bg});
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 5px rgba(0,0,0,0.2),0 5px ${props => props.shadow};
}
`
