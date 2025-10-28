'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Anniversary from '@/components/Anniversary'
import Services from '@/components/Services'
import Materials from '@/components/Materials'
import Certifications from '@/components/Certifications'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import SplashScreen from '@/components/SplashScreen'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      <StructuredData />
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Navbar />
            <Hero />
            <Anniversary />
            <Certifications />
            <Services />
            <Materials />
            <About />
            <Contact />
            <Footer />
            <Chatbot />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
