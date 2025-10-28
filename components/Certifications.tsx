'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Shield, TrendingUp } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    {
      title: 'IATF 16949:2016',
      description: 'Automotive quality management system certification',
      validUntil: 'July 14, 2028',
      icon: Shield,
      color: 'bg-red-100 text-primary',
    },
    {
      title: 'ISO 9001:2018',
      description: 'Quality management system standard',
      validUntil: 'Current',
      icon: Award,
      color: 'bg-yellow-100 text-yellow-700',
    },
  ]

  const qualityFeatures = [
    'DQS Germany Audited Processes',
    'Automotive OEM & ORM Qualified Supplier',
    'Full Product Traceability',
    'Continuous Improvement Programs',
    'Advanced Quality Planning (APQP)',
    'Production Part Approval Process (PPAP)',
    'Statistical Process Control (SPC)',
    'Failure Mode Effects Analysis (FMEA)',
  ]

  const timeline = [
    {
      year: '2003-2015',
      title: 'Foundation & Growth',
      description: 'Import replacement strategy and national market development.',
    },
    {
      year: '2015-2020',
      title: 'Technical Development',
      description: 'Precision capabilities, equipment investment, and facility expansion.',
    },
    {
      year: '2020-2024',
      title: 'OEM Certification',
      description: 'IATF 16949 certification achieved and OEM supply partnerships established.',
    },
    {
      year: '2024-2028',
      title: 'Market Expansion',
      description: 'Growing certified automotive supply to international customers.',
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
            Certifications & Quality
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
            International certifications and quality management systems
            validated through regular audits.
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
                  Valid until {cert.validUntil}
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
            Quality Systems & Tools
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
            Our Journey to Excellence
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
