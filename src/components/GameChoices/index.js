import React from 'react'
import styled from 'styled-components'
import Choice from '../Choice'
import bgTriangle from '../../assets/images/bg-triangle.svg'
import { iconChoices } from '../../utils'
import mediaQuery from '../../mediaQuery'
import { animated } from 'react-spring'
import { CommonAnimation } from '../../animations'

export default function GameChoices () {
  return (
    <ContainerMainGame style={CommonAnimation()}>
      <ContainerChoices>
        <img src={bgTriangle} alt='triangle background' />
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
    </ContainerMainGame>
  )
}
const ContainerMainGame = styled(animated.div)`
display: grid; 
place-items: center ;
height: 65vh;
`
const ContainerChoices = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-areas:
'paper scissors'
'rock rock';
place-items: center;
width: 85%;
height: 45vh;
max-width: 100%;
position: relative;
margin-top: 5%;

& > img{
  height: 60%;
    width: 60%;
    position: absolute;
    z-index: -5;
    
}
@media(min-width:${mediaQuery.desktop}){
height: 30em;
width: 50%;
margin: 0 auto;
margin-top: 4%;
}
`
