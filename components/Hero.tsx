'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Award, Factory, Globe } from 'lucide-react'
import Link from 'next/link'
import AnimatedCounter from './AnimatedCounter'
import { useRef } from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 150 }}
              className="inline-flex items-center gap-2 bg-gray-100 text-primary px-4 py-2 rounded-full mb-6 font-medium text-sm border border-gray-200"
            >
              <Award className="w-4 h-4" />
              IATF 16949:2016 Certified
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 90 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              Where{' '}
              <span className="text-primary">German Quality</span>{' '}
              Meets{' '}
              <span className="text-primary">Mexican Agility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl text-secondary mb-8 max-w-2xl text-balance"
            >
              Precision plastic and vulcanized rubber components for the automotive industry.
              OEM/ORM certified supplier with 22+ years of experience and DQS Germany-audited processes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 150 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg shadow-md flex items-center justify-center gap-2 hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="bg-white hover:bg-gray-50 text-foreground border-2 border-gray-300 hover:border-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7, type: "spring", stiffness: 100 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="text-center lg:text-left"
              >
                <AnimatedCounter
                  end={22}
                  suffix="+"
                  startDelay={2000}
                  duration={1500}
                  className="text-3xl font-bold text-primary"
                />
                <div className="text-sm text-secondary mt-1">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="text-center lg:text-left"
              >
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  startDelay={2100}
                  duration={1500}
                  className="text-3xl font-bold text-primary"
                />
                <div className="text-sm text-secondary mt-1">OEM/ORM Quality</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="text-center lg:text-left"
              >
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-secondary mt-1">Customer Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="grid gap-6"
          >
            {[
              {
                icon: Factory,
                title: 'Precision Manufacturing',
                description: 'ISO-certified facilities producing components that meet strict automotive OEM requirements.',
              },
              {
                icon: Award,
                title: 'Certified Quality',
                description: 'IATF 16949:2016 and ISO 9001:2018 certified with DQS Germany audited processes.',
              },
              {
                icon: Globe,
                title: 'North American Operations',
                description: 'Manufacturing in Mexico with fast delivery across North America and competitive lead times.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50, scale: 0.7 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.12,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 140
                }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-primary/50 hover-lift"

              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - más sutiles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-20 right-10 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl"
      />
    </section>
  )
}
