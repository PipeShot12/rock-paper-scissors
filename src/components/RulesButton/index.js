import React from 'react'
import styled from 'styled-components'
export default function RulesButton (props) {
  return (
    <Button {...props}>RULES</Button>
  )
}
const Button = styled.button`
background: none;
outline: none;
border-radius: 8px;
font-size: 1.1rem;
border:1px solid white;
color:white;
padding: 10px 50px;
letter-spacing: 0.1em;
font-family: var(--font);
font-weight: 400;
position: absolute;
right: 30px;
bottom: 30px;
cursor: pointer;
&:hover{
    background: white;
    color:var(--Score-Text);
    font-weight: 700;
}
`
