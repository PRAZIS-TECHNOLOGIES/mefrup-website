'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enTranslations from '@/translations/en.json'

type Language = 'en' | 'es' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<any>(enTranslations)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved language from localStorage only on client side
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language
      if (saved && ['en', 'es', 'de'].includes(saved)) {
        setLanguageState(saved)
      }
    }
  }, [])

  useEffect(() => {
    // Load translations
    if (mounted && language !== 'en') {
      import(`@/translations/${language}.json`)
        .then((module) => setTranslations(module.default))
        .catch(() => setTranslations(enTranslations))
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
