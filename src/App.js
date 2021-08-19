import './App.css'
import { useState } from 'react'
import GameChoices from './components/GameChoices'
import Header from './components/Header'
import Modal from './components/Modal'
import RulesButton from './components/RulesButton'
import Play from './components/Play'
import { useGameContext } from './context/gameContext'

function App () {
  const [showModal, setShowModal] = useState(false)
  const { userChoice } = useGameContext()

  return (
    <>
      <Header />
      {userChoice ? <Play /> : <GameChoices />}
      <RulesButton onClick={() => setShowModal(true)} />
      {showModal && <Modal onClose={setShowModal} />}
    </>
  )
}

export default App
