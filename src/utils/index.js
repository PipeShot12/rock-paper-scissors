import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'

export const iconChoices = [
  { id: 'rock', icon: rock, text: 'icon-rock', grid: 'rock', bg: 'var(--Rock-Gradient)', shadow: 'hsl(349, 70%, 56%)' },
  { id: 'paper', icon: paper, text: 'icon-paper', grid: 'paper', bg: 'var(--Paper-Gradient)', shadow: 'hsl(230, 89%, 65%)' },
  { id: 'scissors', icon: scissors, text: 'icon-scissors', grid: 'scissors', bg: 'var(--Scissors-Gradient)', shadow: 'hsl(40, 84%, 53%)' }
]

export const whoWon = (user, house) => {
  switch (user + house) {
    case 'rockscissors':
    case 'scissorspaper':
    case 'paperrock':
      return 'win'
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      return 'lose'
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      return 'tie'
    default:
      return undefined
  }
}
