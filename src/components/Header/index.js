import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import { useGameContext } from '../../context/gameContext'
import mediaQuery from '../../mediaQuery'

export default function Header () {
  const { score } = useGameContext()
  return (
    <Continer>
      <img src={logo} alt='logo' />
      <ContainerScore>
        <ScoreTitle>SCORE</ScoreTitle>
        <Score>{score}</Score>
      </ContainerScore>
    </Continer>
  )
}

const Continer = styled.div`
width: 80%;
margin: 0 auto;
border: 3px solid var(--Header-Outline);
border-radius: 10px;
display: flex;
align-items: center;
margin-top: 35px;
& > img{
    width: 140px;
}
padding: 10px 20px;
justify-content: space-between;
@media(min-width: ${mediaQuery.desktop}){
    width: 50%;
};
`
const ContainerScore = styled.div`
background-color: white;
border-radius: 5px;
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
box-shadow: 0 2px 10px -5px #000;
position: relative;
`
const ScoreTitle = styled.div`
font-size: 1rem;
letter-spacing: 0.1em;
color:var(--Score-Text);
padding: 0;
margin: 0;
position: absolute;
top: 5px;
font-weight: 600;
`
const Score = styled.div`
color:var(--Dark-Text);
padding: 0;
margin: 0;
font-weight: 700;
font-size: 3.5rem;
margin-top: 15px;
`
