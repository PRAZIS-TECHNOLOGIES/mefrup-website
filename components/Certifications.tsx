'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Shield, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Certifications() {
  const { t } = useLanguage()

  const certifications = [
    {
      title: t?.certifications?.iatfTitle || 'IATF 16949:2016',
      description: t?.certifications?.iatfDescription || 'Automotive quality management system certified by DQS Germany.',
      validUntil: t?.certifications?.iatfValid || 'Valid until July 14, 2028',
      icon: Shield,
      color: 'bg-red-100 text-primary',
    },
    {
      title: t?.certifications?.isoTitle || 'ISO 9001:2015',
      description: t?.certifications?.isoDescription || 'Certified quality management system for manufacturing processes.',
      validUntil: t?.certifications?.current || 'Current',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-700',
    },
  ]

  const qualityFeatures = [
    t?.certifications?.qualityFeatures?.dqsAudited || 'DQS Germany Audited Processes',
    t?.certifications?.qualityFeatures?.oemQualified || 'Automotive OEM & ORM Qualified Supplier',
    t?.certifications?.qualityFeatures?.traceability || 'Full Product Traceability',
    t?.certifications?.qualityFeatures?.continuousImprovement || 'Continuous Improvement Programs',
    t?.certifications?.qualityFeatures?.apqp || 'Advanced Quality Planning (APQP)',
    t?.certifications?.qualityFeatures?.ppap || 'Production Part Approval Process (PPAP)',
    t?.certifications?.qualityFeatures?.spc || 'Statistical Process Control (SPC)',
    t?.certifications?.qualityFeatures?.fmea || 'Failure Mode Effects Analysis (FMEA)',
  ]

  const timeline = [
    {
      year: '2003-2015',
      title: t?.certifications?.timeline?.['2003']?.title || 'Foundation & Growth',
      description: t?.certifications?.timeline?.['2003']?.description || 'Import replacement strategy and national market development.',
    },
    {
      year: '2015-2020',
      title: t?.certifications?.timeline?.['2015']?.title || 'Technical Development',
      description: t?.certifications?.timeline?.['2015']?.description || 'Precision capabilities, equipment investment, and facility expansion.',
    },
    {
      year: '2020-2024',
      title: t?.certifications?.timeline?.['2020']?.title || 'OEM Certification',
      description: t?.certifications?.timeline?.['2020']?.description || 'IATF 16949 certification achieved and OEM supply partnerships established.',
    },
    {
      year: '2024-2028',
      title: t?.certifications?.timeline?.['2024']?.title || 'Market Expansion',
      description: t?.certifications?.timeline?.['2024']?.description || 'Growing certified automotive supply to international customers.',
    },
  ]

  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t?.certifications?.title || 'Certifications & Quality'}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
            {t?.certifications?.subtitle || 'Certified and audited processes by internationally recognized organizations.'}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-500 hover:border-primary/50 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gray-50 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="relative z-10">
                <motion.div
                  className={`${cert.color} p-4 rounded-xl w-fit mb-6`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <cert.icon className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-secondary mb-4">{cert.description}</p>
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  {cert.validUntil}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Features */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="bg-white p-10 rounded-2xl shadow-md mb-16 relative overflow-hidden border border-gray-200"
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-8 text-center relative z-10"
          >
            {t?.certifications?.qualitySystemsTitle || 'Quality Systems & Tools'}
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{
                  x: 5,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex items-start gap-3"
              >
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.5, type: "spring" }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                </motion.div>
                <span className="text-secondary font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            {t?.certifications?.journeyTitle || 'Our Journey to Excellence'}
          </h3>
          <div className="relative pt-8">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-primary opacity-20"></div>

            {/* Timeline Dots Container - separate from cards */}
            <div className="hidden lg:block absolute top-8 left-0 right-0">
              <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                {timeline.map((item, index) => (
                  <div key={`dot-${item.year}`} className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                      className="w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg relative"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                    transition: { duration: 0.3, type: "spring", stiffness: 400 }
                  }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/50 shadow-md hover:shadow-lg transition-shadow duration-500 h-full relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gray-50 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center justify-center gap-2 mb-4 bg-gray-100 p-3 rounded-lg border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </motion.div>
                      <h4 className="font-bold text-lg text-foreground mb-3 text-center">
                        {item.title}
                      </h4>
                      <p className="text-sm text-secondary leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
