'use client'

import { motion } from 'framer-motion'
import { Car, Settings, Package, Shield, Cog, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Car,
      title: 'Automotive Sealing Systems',
      description: 'Sealing components that meet OEM specifications for durability and performance in automotive applications.',
      features: ['Custom designs', 'Weather-resistant materials', 'OEM/ORM quality'],
    },
    {
      icon: Cog,
      title: 'Industrial Components',
      description: 'Vulcanized rubber and plastic parts for demanding industrial machinery and equipment.',
      features: ['Heavy-duty applications', 'Long service life', 'Custom specifications'],
    },
    {
      icon: Settings,
      title: 'Critical Production Parts',
      description: 'Reliable components manufactured to minimize downtime in production environments.',
      features: ['Fast replacement', 'Consistent quality', '24/7 support available'],
    },
    {
      icon: Package,
      title: 'ORM Replacement Parts',
      description: 'Exact-fit replacement components as Original Replacement Manufacturer, specializing in rubber seals and gaskets.',
      features: ['Direct replacement', 'Cost-effective', 'Quick delivery'],
    },
    {
      icon: Shield,
      title: 'OEM Supply',
      description: 'Direct supply to automotive OEMs with full quality management and traceability.',
      features: ['IATF 16949 certified', 'Complete traceability', 'Reliable quality'],
    },
    {
      icon: Zap,
      title: 'Prototyping & Development',
      description: 'Fast prototyping and testing of new components with technical support.',
      features: ['Quick iterations', 'Technical collaboration', 'Pre-production validation'],
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
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
            Products & Services
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto text-balance">
            Precision components for automotive and industrial applications,
            backed by 22+ years of manufacturing experience and ISO-certified quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/50 transition-all duration-500 shadow-md hover:shadow-lg"
            >
              <div className="bg-gray-100 p-4 rounded-xl w-fit mb-6 border border-gray-200 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-secondary mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
