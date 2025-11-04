'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, CheckCircle, Star, Trophy, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Anniversary() {
  const { t } = useLanguage()
  const milestones = [
    {
      icon: Award,
      year: '2003',
      title: 'Founded',
      description: 'MEFRUP established in Mexico'
    },
    {
      icon: TrendingUp,
      year: '2015',
      title: 'Expansion',
      description: 'Facility upgrades and capacity growth'
    },
    {
      icon: Trophy,
      year: '2024',
      title: 'IATF Certified',
      description: 'Achieved automotive quality certification'
    },
    {
      icon: Star,
      year: '2025',
      title: '22 Years',
      description: 'Celebrating excellence and growth'
    }
  ]

  const achievements = [
    { icon: Target, value: t?.anniversary?.stats?.years || '22', label: t?.anniversary?.stats?.yearsLabel || 'YEARS', sublabel: t?.anniversary?.stats?.yearsSublabel || 'EXCELLENCE' },
    { icon: Trophy, value: t?.anniversary?.stats?.iatf || 'IATF', label: t?.anniversary?.stats?.iatfLabel || '16949:2016', sublabel: t?.anniversary?.stats?.iatfSublabel || 'CERTIFIED' },
    { icon: Award, value: t?.anniversary?.stats?.dqs || 'DQS', label: t?.anniversary?.stats?.dqsLabel || 'GERMANY', sublabel: t?.anniversary?.stats?.dqsSublabel || 'AUDITED' },
    { icon: CheckCircle, value: t?.anniversary?.stats?.quality || '100%', label: t?.anniversary?.stats?.qualityLabel || 'OEM/MRO', sublabel: t?.anniversary?.stats?.qualitySublabel || 'QUALITY' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Grid - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "linear"
          }}
          className="absolute inset-0 opacity-20 will-change-transform"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #DC1E28 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'translateZ(0)', // Force GPU acceleration
          }}
        />
      </div>

      {/* Premium Light Effects - Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[80px] will-change-transform pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[80px] will-change-transform pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        {/* Logo Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <Image
            src="/logomefrup.png"
            alt="MEFRUP"
            width={150}
            height={50}
            className="mx-auto mb-4 sm:mb-8 drop-shadow-2xl w-32 sm:w-40 md:w-48 h-auto"
          />
        </motion.div>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-24">
          {/* Year Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="inline-block mb-6 sm:mb-12"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8
                }}
                className="absolute inset-0 bg-accent rounded-full blur-xl will-change-transform pointer-events-none"
                style={{ transform: 'translateZ(0)' }}
              />
              <div className="relative bg-gradient-to-br from-primary to-primary-dark px-4 sm:px-8 md:px-12 py-2 sm:py-4 md:py-6 rounded-full border-2 sm:border-4 border-accent shadow-2xl will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wide sm:tracking-wider whitespace-nowrap">
                  2003 - 2025
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-white mb-4 sm:mb-6 leading-none tracking-tight break-words px-2" style={{ hyphens: 'auto' }}>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block mb-2 sm:mb-4 text-2xl sm:text-5xl md:text-6xl"
              >
                {t?.anniversary?.celebrating || 'CELEBRATING'}
              </motion.span>
              <motion.span
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.9, type: "spring", stiffness: 80 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent break-words text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                style={{
                  textShadow: '0 0 80px rgba(255, 214, 0, 0.5)',
                  hyphens: 'auto',
                  wordBreak: 'break-word'
                }}
              >
                {t?.anniversary?.years || '22 YEARS'}
              </motion.span>
            </h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-light tracking-wide mt-2 sm:mt-4 md:mt-8 px-4 break-words"
              style={{ hyphens: 'auto' }}
            >
              {t?.anniversary?.excellence || 'of Manufacturing Excellence'}
            </motion.p>
          </motion.div>
        </div>

        {/* Premium Stats Grid */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-24 px-2"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ scale: 0, rotateY: -90, opacity: 0 }}
              whileInView={{ scale: 1, rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.3 + index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Glow Effect - Optimized */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 will-change-auto pointer-events-none"
                style={{ transform: 'translateZ(0)' }}
              />

              {/* Card - Optimized */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-3 sm:p-8 rounded-3xl border-2 border-white/20 group-hover:border-accent/50 transition-all duration-500 shadow-2xl will-change-transform overflow-hidden"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <achievement.icon className="w-12 sm:w-16 h-12 sm:h-16 text-white" />
                </div>

                <div className="relative z-10 text-center sm:text-left px-1 sm:px-0">
                  <div className="bg-accent/20 p-2 sm:p-3 rounded-2xl w-fit mb-2 sm:mb-4 border border-accent/30 mx-auto sm:mx-0">
                    <achievement.icon className="w-5 sm:w-8 h-5 sm:h-8 text-accent" />
                  </div>

                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-1 sm:mb-2 tracking-tight leading-none">
                    {achievement.value}
                  </div>

                  <div className="text-[9px] sm:text-sm font-bold text-accent uppercase tracking-tight sm:tracking-widest mb-1 break-words leading-tight">
                    {achievement.label}
                  </div>

                  <div className="text-[8px] sm:text-xs text-gray-400 uppercase tracking-normal sm:tracking-wider leading-tight">
                    {achievement.sublabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-20"
        />

        {/* Bottom Tagline - Premium */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 2, type: "spring", stiffness: 80 }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow Background - Optimized */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-2xl will-change-transform pointer-events-none"
              style={{ transform: 'translateZ(0)' }}
            />

            {/* Card - Optimized */}
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/30 py-6 sm:py-10 px-6 sm:px-16 rounded-3xl shadow-2xl will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-wide leading-relaxed break-words text-balance" style={{ hyphens: 'auto' }}>
                {t?.anniversary?.tagline || 'Where German Quality Meets Mexican Agility'}
              </p>

              {/* Decorative Lines */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
