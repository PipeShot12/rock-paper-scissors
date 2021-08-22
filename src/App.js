import './App.css'
import { useState } from 'react'
import GameChoices from './components/GameChoices'
import Header from './components/Header'
import Modal from './components/Modal'
import RulesButton from './components/RulesButton'
import Play from './components/Play'
import { useGameContext } from './context/gameContext'
import { animated } from 'react-spring'
import { AnimationEnterApp, AnimationModal } from '../src/animations'

function App () {
  const [showModal, setShowModal] = useState(false)
  const { userChoice } = useGameContext()
  const { transition } = AnimationModal(showModal)
  return (
    <>
      <animated.div style={AnimationEnterApp()}>
        <Header />
        {userChoice ? <Play /> : <GameChoices />}
      </animated.div>
      <RulesButton onClick={() => setShowModal(prev => !prev)} />
      {transition((style, item) => item &&
        (
          <Modal onClose={setShowModal} style={style} />
        )
      )}
    </>
  )
}
export default App
