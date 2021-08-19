import { useEffect, useRef } from 'react'

export default function useClickOutside (callback) {
  const nodeRef = useRef()
  useEffect(() => {
    const handler = (e) => {
      !nodeRef.current?.contains(e.target) && callback()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  })
  return nodeRef
}
