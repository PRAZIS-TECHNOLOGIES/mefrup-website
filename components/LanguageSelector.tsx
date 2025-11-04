'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇲🇽' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <div className="relative z-[60]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-200 bg-white shadow-sm"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
        <span className="text-sm font-bold text-foreground hidden sm:inline">
          {currentLang?.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55]"
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-2 w-full sm:w-48 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-[70] overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as 'en' | 'es' | 'de')
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 sm:py-3 transition-colors duration-150 ${
                    language === lang.code
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-50 text-foreground'
                  } ${lang.code === 'en' ? 'rounded-t-xl' : lang.code === 'de' ? 'rounded-b-xl' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check className="w-5 h-5" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
