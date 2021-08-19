import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Choice from '../Choice'
import { iconChoices, whoWon } from '../../utils'
import { useGameContext } from '../../context/gameContext'

export default function Play () {
  const [houseChoice, setHouseChoice] = useState(false)
  const { userChoice, setScore } = useGameContext()
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
    if (win === 'win') {
      setScore(prev => prev + 1)
    } else if (win === 'lose') {
      setScore(prev => prev - 1)
    }
  }, [win, setScore])

  return (
    <ContainerPlay>
      <div>
        <p>YOU PICKED</p>
        <Choice icon={userChoiceObj.icon} alt={userChoiceObj.text} bg={userChoiceObj.bg} shadow={userChoiceObj.shadow} allowClick={false} />
      </div>
      <div>
        <p>THE HOUSE PICKED</p>
        {houseChoice ? <Choice icon={houseChoiceObj.icon} alt={houseChoiceObj.text} bg={houseChoiceObj.bg} shadow={houseChoiceObj.shadow} allowClick={false} /> : <ChoiceWait />}
      </div>
    </ContainerPlay>
  )
}
const ContainerPlay = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 30rem;
width: 50%;
margin: 0 auto;
margin-top: 50px;
position: relative;
& > div > p {
    color: white;
    font-weight: 400;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 60px;
}
`
const ChoiceWait = styled.div`
width: 10rem;
height: 10rem;
border-radius: 50%;
background-color: rgba(0,0,0,0.2);
`
