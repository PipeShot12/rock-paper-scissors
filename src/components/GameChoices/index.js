import React from 'react'
import styled from 'styled-components'
import Choice from '../Choice'
import bgTriangle from '../../assets/images/bg-triangle.svg'
import { iconChoices } from '../../utils'
import mediaQuery from '../../mediaQuery'

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
width: 100%;
height: 300px;
max-width: 100%;
position: relative;
margin-top: 50px;
&::before{
    content: "";
    height: 100%;
    width: 100%;
    background: url(${bgTriangle}) no-repeat;
    position: absolute;
    top:5%;
    left: 5%;
    object-fit: fill;
    z-index: -2;
    transform: scale(0.8);
}
@media(min-width:${mediaQuery.desktop}){
height: 30rem;
width: 50%;
margin: 0 auto;
margin-top: 50px;
&::before{
    content: "";
    height: 100%;
    width: 100%;
    background: url(${bgTriangle}) no-repeat;
    position: absolute;
    top:25%;
    left: 27%;
    transform: scale(1);
  }
}
`
