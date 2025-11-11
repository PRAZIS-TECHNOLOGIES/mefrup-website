'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Rocket } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const values = [
    {
      icon: Target,
      title: t?.about?.manufacturing || 'Precision Manufacturing',
      description: t?.about?.manufacturingText || 'State-of-the-art facilities equipped with modern machinery for injection molding and rubber vulcanization.',
    },
    {
      icon: Users,
      title: t?.about?.qualityControl || 'Quality Control',
      description: t?.about?.qualityControlText || 'Rigorous inspection and testing processes at every production stage to ensure consistency.',
    },
    {
      icon: Lightbulb,
      title: t?.about?.customSolutions || 'Custom Solutions',
      description: t?.about?.customSolutionsText || 'Engineering capability to develop and manufacture components to exact customer specifications.',
    },
  ]

  const industries = [
    t?.about?.industries?.automotive || 'Automotive Manufacturing',
    t?.about?.industries?.heavyMachinery || 'Heavy Machinery',
    t?.about?.industries?.industrial || 'Industrial Equipment',
    t?.about?.industries?.production || 'Production Systems',
    t?.about?.industries?.oemDistributors || 'OEM Distributors',
    t?.about?.industries?.aftermarket || 'Aftermarket Supply',
  ]

  return (
    <section id="about" className="py-24 bg-white">
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
            {t?.about?.title || 'About MEFRUP'}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
            {t?.about?.subtitle || 'Leading manufacturer of precision automotive components with over two decades of excellence.'}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {t?.about?.ourStory || 'Our Story'}
            </h3>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                {t?.about?.storyText || 'Founded in 2003, MEFRUP Group LLC has established itself as a trusted supplier of precision vulcanized rubber and engineering plastic components for the automotive industry. With IATF 16949:2016 certification and DQS Germany audited processes, we deliver OEM-level quality with the agility of a dedicated manufacturing partner.'}
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary text-white rounded-xl shadow-lg relative overflow-hidden border-2 border-primary-dark">
              <h4 className="text-2xl font-bold mb-2">
                {t?.about?.commitment || 'Our Commitment'}
              </h4>
              <p>
                {t?.about?.commitmentText || 'We are committed to delivering the highest quality components that meet or exceed industry standards. Our team works closely with customers to ensure every project is completed to specification and on time.'}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              {t?.about?.expertise || 'Our Expertise'}
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-shadow duration-500 shadow-md hover:shadow-lg relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  />
                  <motion.div
                    className="bg-gray-100 p-3 rounded-lg h-fit border border-gray-200 relative z-10"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-secondary text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-2xl border border-gray-200 shadow-md"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t?.about?.industriesTitle || 'Industries We Serve'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <p className="text-sm font-medium text-foreground">{industry}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: 22, suffix: '+', label: t?.about?.stats?.yearsLabel || 'Years of Excellence', animated: true },
            { number: 100, suffix: '%', label: t?.about?.stats?.qualityLabel || 'OEM/ORM Quality Standards', animated: true },
            { number: null, text: '24/7', label: t?.about?.stats?.supportLabel || 'Customer Support', animated: false },
            { number: 2028, suffix: '', label: t?.about?.stats?.certificationLabel || 'Certification Valid Until', animated: true },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 150,
                damping: 15
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-500 border border-gray-200 hover:border-primary/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              />
              <div className="relative z-10">
                {stat.animated ? (
                  <AnimatedCounter
                    end={stat.number!}
                    suffix={stat.suffix}
                    className="text-4xl font-bold text-primary mb-2"
                  />
                ) : (
                  <div className="text-4xl font-bold text-primary mb-2">{stat.text}</div>
                )}
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
