import { useSpring, config, useTransition } from '@react-spring/core'

export const AnimationEnterApp = () => {
  return (useSpring({
    from: { opacity: 0, transform: 'scaleY(0)', height: '0px' },
    to: { opacity: 1, transform: 'scaleY(1)', height: '100vh' },
    config: config.wobbly,
    delay: 500
  }))
}

export const AnimationModal = (showModal) => {
  const transition = useTransition(showModal, {
    from: { opacity: 0, x: -1000 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -1000 }
  })

  return { transition }
}
export const CommonAnimation = () => {
  return (useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.wobbly
  }))
}
