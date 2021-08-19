import React from 'react'
import styled from 'styled-components'
import Choice from '../Choice'
import bgTriangle from '../../assets/images/bg-triangle.svg'
import { iconChoices } from '../../utils'

export default function GameChoices () {
  return (
    <ContainerChoices>
      {iconChoices.map(({ icon, text, grid, bg, shadow, id }) =>
        <Choice
          key={text}
          icon={icon}
          alt={text}
          grid={grid}
          bg={bg}
          shadow={shadow}
          choice={id}
          allowClick
        />)}
    </ContainerChoices>
  )
}

const ContainerChoices = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-areas:
'paper scissors'
'rock rock';
place-items: center;
height: 30rem;
width: 50%;
margin: 0 auto;
margin-top: 50px;
position: relative;
&::before{
    content: "";
    height: 100%;
    width: 100%;
    background: url(${bgTriangle}) no-repeat;
    position: absolute;
    top:25%;
    left: 27%;
    z-index: -2;
}
`
