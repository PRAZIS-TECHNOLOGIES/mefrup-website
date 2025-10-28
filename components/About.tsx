'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Rocket } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Manufacturing to tight tolerances with zero-defect production goals.',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Working closely with customers to meet exact specifications and solve technical challenges.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Improvement',
      description: 'Ongoing investment in equipment, processes, and quality systems.',
    },
    {
      icon: Rocket,
      title: 'Fast Response',
      description: 'Quick turnaround times enabled by our manufacturing location and logistics network.',
    },
  ]

  const industries = [
    'Automotive Manufacturing',
    'Heavy Machinery',
    'Industrial Equipment',
    'Production Systems',
    'OEM Distributors',
    'Aftermarket Supply',
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
            About MEFRUP Group
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
            Over two decades manufacturing precision components for automotive and industrial OEMs,
            delivering international quality standards from Mexico.
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
              Our Story
            </h3>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Founded in 2003, MEFRUP Group evolved from import replacement
                to becoming a <strong className="text-foreground">certified OEM/ORM supplier</strong> for
                international automotive manufacturers.
              </p>
              <p>
                Our growth reflects consistent quality execution—from establishing national market
                presence to achieving <strong className="text-foreground">IATF 16949:2016 certification</strong> through
                DQS Germany audited processes.
              </p>
              <p>
                Today we manufacture precision plastic and vulcanized rubber components
                that meet the same standards demanded by leading automotive OEMs,
                with the responsiveness of our Mexican manufacturing base.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary text-white rounded-xl shadow-lg relative overflow-hidden border-2 border-primary-dark">
              <h4 className="text-2xl font-bold mb-2">
                Where German Quality Meets Mexican Agility
              </h4>
              <p>
                International quality standards combined with efficient North American logistics—
                delivering certified components with shorter lead times and better cost structure.
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
              Our Core Values
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
            Industries We Serve
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
            { number: 22, suffix: '+', label: 'Years of Excellence', animated: true },
            { number: 100, suffix: '%', label: 'OEM/ORM Quality Standards', animated: true },
            { number: null, text: '24/7', label: 'Customer Support', animated: false },
            { number: 2028, suffix: '', label: 'Certification Valid Until', animated: true },
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
