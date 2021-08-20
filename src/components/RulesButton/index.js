import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'
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
display: block;
cursor: pointer;
position: absolute;
bottom: 30px;
left: 50%;
transform: translateX(-50%);
&:hover{
    background: white;
    color:var(--Score-Text);
    font-weight: 700;
}
@media(min-width: ${mediaQuery.desktop}){
position: absolute;
right: 30px;
bottom: 30px;
transform: translateX(0);
left: auto;
}
`
