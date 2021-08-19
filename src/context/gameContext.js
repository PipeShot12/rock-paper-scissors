import { createContext, useContext, useState } from 'react'

const context = createContext()

export const useGameContext = () => {
  return useContext(context)
}
export const GameContextProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState(undefined)
  const [score, setScore] = useState(0)
  return (
    <context.Provider value={{ userChoice, setUserChoice, score, setScore }}>
      {children}
    </context.Provider>
  )
}
