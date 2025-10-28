'use client'

import { motion } from 'framer-motion'
import { Thermometer, Shield, Wrench } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Materials() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('rubber')

  const rubberMaterials = [
    {
      code: 'NBR',
      name: 'Nitrile Butadiene Rubber',
      properties: 'Oil and fuel resistance',
      tempRange: '-30°C to +120°C'
    },
    {
      code: 'EPDM',
      name: 'Ethylene Propylene Diene Monomer',
      properties: 'Ozone, weather, and high temperature resistance',
      tempRange: 'Up to +150°C'
    },
    {
      code: 'FKM/Viton',
      name: 'Fluoroelastomer',
      properties: 'Superior chemical resistance, high temperature',
      tempRange: 'Up to +200°C'
    },
    {
      code: 'VMQ',
      name: 'Silicone Rubber',
      properties: 'Extreme temperature flexibility',
      tempRange: '-60°C to +200°C'
    },
    {
      code: 'CR',
      name: 'Neoprene/Chloroprene',
      properties: 'Balanced properties for general purpose applications',
      tempRange: 'Standard range'
    },
    {
      code: 'FFKM',
      name: 'Perfluoroelastomer',
      properties: 'Ultimate chemical resistance for extreme applications',
      tempRange: 'Extreme range'
    }
  ]

  const plasticMaterials = [
    {
      code: 'PA6',
      name: 'Nylon 6',
      properties: 'High strength, good chemical resistance',
      tempRange: 'Up to +80°C'
    },
    {
      code: 'PA66',
      name: 'Nylon 66',
      properties: 'Enhanced mechanical properties, higher temperature resistance',
      tempRange: '+100°C'
    },
    {
      code: 'PA6.6-GF30',
      name: 'Glass Filled Nylon',
      properties: '30% glass fiber reinforcement for superior strength',
      tempRange: 'Enhanced'
    },
    {
      code: 'POM',
      name: 'Polyoxymethylene/Acetal',
      properties: 'Excellent dimensional stability, low friction, chemical resistance',
      tempRange: 'Standard'
    },
    {
      code: 'PC',
      name: 'Polycarbonate',
      properties: 'High impact strength, optical clarity',
      tempRange: '+120°C'
    },
    {
      code: 'ABS',
      name: 'Acrylonitrile Butadiene Styrene',
      properties: 'Good balance of strength, toughness, and processability',
      tempRange: 'Standard'
    },
    {
      code: 'PP',
      name: 'Polypropylene',
      properties: 'Chemical resistance, low density, cost-effective',
      tempRange: 'Standard'
    },
    {
      code: 'PE-UHMW',
      name: 'Ultra High Molecular Weight Polyethylene',
      properties: 'Exceptional wear resistance, self-lubricating',
      tempRange: 'Standard'
    },
    {
      code: 'PBT',
      name: 'Polybutylene Terephthalate',
      properties: 'Good electrical properties, chemical resistance',
      tempRange: 'Standard'
    },
    {
      code: 'PPS',
      name: 'Polyphenylene Sulfide',
      properties: 'High temperature resistance, dimensional stability',
      tempRange: '+200°C'
    },
    {
      code: 'PEEK',
      name: 'Polyetheretherketone',
      properties: 'Ultimate performance, chemical inertness',
      tempRange: '+250°C'
    },
    {
      code: 'PEI',
      name: 'Polyetherimide',
      properties: 'High strength at elevated temperatures, flame resistance',
      tempRange: 'High temp'
    }
  ]

  const currentMaterials = selectedCategory === 'rubber' ? rubberMaterials : plasticMaterials

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t?.materials?.title || 'Available Materials'}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {t?.materials?.subtitle || 'Comprehensive range of rubber compounds and engineering plastics for diverse application requirements.'}
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('rubber')}
            className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'rubber'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-foreground border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <Shield className="w-5 h-5" />
            {t?.materials?.rubberCompounds || 'Rubber Compounds'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('plastic')}
            className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'plastic'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-foreground border-2 border-gray-200 hover:border-primary/50'
            }`}
          >
            <Wrench className="w-5 h-5" />
            {t?.materials?.engineeringPlastics || 'Engineering Plastics'}
          </motion.button>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentMaterials.map((material, index) => (
            <motion.div
              key={material.code}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-mono font-bold text-sm">
                  {material.code}
                </div>
                <Thermometer className="w-5 h-5 text-accent" />
              </div>

              <h4 className="text-lg font-bold text-foreground mb-2">
                {material.name}
              </h4>

              <p className="text-sm text-secondary mb-3 leading-relaxed">
                {material.properties}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono bg-white px-3 py-2 rounded-lg border border-gray-200">
                <Thermometer className="w-4 h-4 text-primary" />
                <span className="text-foreground font-bold">{material.tempRange}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-md mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              {selectedCategory === 'rubber' ? (
                <Shield className="w-6 h-6 text-primary" />
              ) : (
                <Wrench className="w-6 h-6 text-primary" />
              )}
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">
                {selectedCategory === 'rubber'
                  ? (t?.materials?.rubberCompounds || 'Rubber Compounds')
                  : (t?.materials?.engineeringPlastics || 'Engineering Plastics (Injection Molded)')}
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {selectedCategory === 'rubber'
                  ? (t?.materials?.rubberDescription || 'Our rubber compounds are selected for their specific resistance properties, temperature ranges, and application suitability. All materials meet or exceed industry standards for sealing applications.')
                  : (t?.materials?.plasticsDescription || 'Engineering-grade thermoplastics manufactured through precision injection molding. These materials provide excellent mechanical properties, dimensional stability, and chemical resistance for demanding applications.')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA to Products Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            {t?.materials?.viewCatalog || 'View Complete Product Catalog'}
          </Link>
        </motion.div>

        {/* Custom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center bg-primary text-white p-12 rounded-3xl shadow-lg relative overflow-hidden border-2 border-primary-dark"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t?.materials?.needCustom || 'Need Custom Components?'}
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t?.materials?.customDescription || 'Our team is ready to discuss your requirements and manufacture components to your exact specifications.'}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg shadow-md hover:scale-105"
          >
            {t?.materials?.discussProject || 'Discuss Your Project'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
