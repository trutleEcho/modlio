'use client'

import { useEffect } from 'react'

export default function SwRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register('/sw.js', { scope: '/' })
        } catch (err) {
          // swallow registration errors silently
        }
      }
      register()
    }
  }, [])

  return null
}


