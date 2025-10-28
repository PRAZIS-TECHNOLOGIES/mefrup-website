'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    // Splash screen duration - más rápido
    const timer = setTimeout(() => {
      onComplete()
    }, 1200)

    return () => {
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden"
    >
      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 150,
          damping: 20
        }}
        className="relative z-10"
      >
        <Image
          src="/logomefrup.png"
          alt="MEFRUP Logo"
          width={400}
          height={400}
          className="w-64 md:w-80 h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
