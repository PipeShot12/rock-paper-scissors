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
bottom: 7%;
left: 50%;
transform: translateX(-50%);
background-position: 50% 50%;
background-image: linear-gradient(white,white);
background-repeat: no-repeat;
background-size: 0% 100%;
font-weight: 700;
transition: background-size .2s ease-in-out, color .2s ease-in-out;
&:hover{
    background-size: 100% 100%;
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
