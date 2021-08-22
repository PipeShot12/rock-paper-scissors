import React from 'react'
import styled from 'styled-components'
import close from '../../assets/images/icon-close.svg'
import { createPortal } from 'react-dom'
import rules from '../../assets/images/image-rules.svg'
import useClickOutside from '../../hooks/useClickOutside'
import mediaQuery from '../../mediaQuery'
import { animated } from 'react-spring'

function Modal ({ onClose, style }) {
  const nodeRef = useClickOutside(() => onClose(false))
  return (
    <ContainerModal style={style}>
      <ModalBox ref={nodeRef}>
        <span onClick={() => onClose(false)} />
        <h1>RULES</h1>
        <img src={rules} alt='instructions' />
      </ModalBox>
    </ContainerModal>
  )
}
export default function ModalPortal ({ onClose, style }) {
  return createPortal(
    <Modal onClose={onClose} style={style} />,
    document.getElementById('modal')
  )
}
const ContainerModal = styled(animated.div)`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
background: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
`
const ModalBox = styled.div`
width: 80%;
height: 80%;
background-color: white;
border-radius: 10px;
position: relative;
padding: 0px 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
& > span{
    position: absolute;
    top: 10px;
    right: 10px;
    height: 25px;
    width: 25px;
    display: grid;
    place-items: center;
    background-image: url(${close});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

}
& > img {
  width: 90%;
  margin-bottom: 15px;
}
& > h1 {
  text-align: center;
  width: 100%;
  line-height: 0;
}
@media(min-width:${mediaQuery.desktop}){
width: 30%;
height: 50%;
& > h1 {
  padding-left: 20px;
  width: 100%;
  line-height: 0;
  text-align: left;
  }
}
`
