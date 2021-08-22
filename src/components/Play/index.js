import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Choice from '../Choice'
import { iconChoices, whoWon, colorButtonPlayAgain } from '../../utils'
import { useGameContext } from '../../context/gameContext'
import mediaQuery from '../../mediaQuery'

export default function Play () {
  const [houseChoice, setHouseChoice] = useState(false)
  const { userChoice, setScore, setUserChoice } = useGameContext()
  const housePick = () => {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * (3 - 1) + 1)]
  }

  useEffect(() => {
    setTimeout(() => {
      setHouseChoice(housePick())
    }, 1000)
  }, [])

  const houseChoiceObj = iconChoices.find(item => item?.id === houseChoice)
  const userChoiceObj = iconChoices.find(item => item.id === userChoice)

  const win = whoWon(userChoiceObj.id, houseChoiceObj?.id)
  useEffect(() => {
    if (win === 'YOU WIN') {
      setScore(prev => prev + 1)
    } else if (win === 'YOU LOSE') {
      setScore(prev => prev - 1)
    }
  }, [win, setScore])
  return (
    <ContainerPlay>
      <div className='user-picked'>
        <p>YOU PICKED</p>
        <Choice win={win === 'YOU WIN' && true} icon={userChoiceObj.icon} alt={userChoiceObj.text} bg={userChoiceObj.bg} shadow={userChoiceObj.shadow} allowClick={false} />
      </div>
      {win &&
        <ContainerButtonPlayAgain colorTitle={colorButtonPlayAgain(win)}>
          <h2>{win}</h2>
          <Button color={colorButtonPlayAgain(win)} onClick={() => setUserChoice(false)}>PLAY AGAIN</Button>
        </ContainerButtonPlayAgain>}
      <div className='house-picked'>
        <p>THE HOUSE PICKED</p>
        {houseChoice ? <Choice win={win === 'YOU LOSE' && true} icon={houseChoiceObj.icon} alt={houseChoiceObj.text} bg={houseChoiceObj.bg} shadow={houseChoiceObj.shadow} allowClick={false} /> : <ChoiceWait />}
      </div>
    </ContainerPlay>
  )
}
const ContainerPlay = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 15rem;
width: 100%;
margin: 0 auto;
margin-top: 50px;
& > div > p {
    color: white;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
    margin-top: 30px;
}
& > .house-picked,.user-picked {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
@media(min-width:${mediaQuery.desktop}){
  height: 30rem;
  width: 50%;
  & > .house-picked,.user-picked {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & > div > p {
    color: white;
    font-weight: 400;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 60px;
  }
}
`
const ChoiceWait = styled.div`
width: 6.5rem;
height: 6.5rem;
border-radius: 50%;
background-color: rgba(0,0,0,0.2);
@media(min-width:${mediaQuery.desktop}){
  width: 10rem;
  height: 10rem;
  }
`
const Button = styled.button`
background-color: transparent;
outline: none;
border-radius: 8px;
font-size: 1.1rem;
border:1px solid white;
color:${props => props.color};
padding: 10px 40px;
letter-spacing: 0.1em;
font-family: var(--font);
font-weight: 600;
cursor: pointer;
background-position: 50% 50%;
background-image: linear-gradient(white,white);
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .2s ease-in-out, color .2s ease-in-out;
&:hover{
    background-size: 0% 100%;
    color:white;
    font-weight: 600;
}
`
const ContainerButtonPlayAgain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
bottom: 20%;

& > h2{
  color: ${props => props.colorTitle};
  text-align: center; 
  font-size: 3em;
  margin-bottom: 0;
}
@media(min-width:${mediaQuery.desktop}){
    position: relative;
    bottom: auto;
    & > h2{
    margin-bottom: 20%;
    }
  }
`
