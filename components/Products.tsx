'use client'

import { motion } from 'framer-motion'
import { Download, CheckCircle, Search, Thermometer, Shield, Wrench } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()
  const [selectedType, setSelectedType] = useState('standard')
  const [selectedMaterialCategory, setSelectedMaterialCategory] = useState('rubber')

  // Static data - no dependencies on translations for core structure
  const gasketTypesData = [
    {
      id: 'standard',
      thickness: '0.079"',
      materials: ['NBR', 'Neoprene', 'White Nitrile', 'EPDM', 'FKM (Viton)', 'Red Silicone', 'Translucent Silicone', 'White Silicone']
    },
    {
      id: 'flanged',
      thickness: 'Variable',
      materials: ['NBR', 'Neoprene', 'White Nitrile', 'EPDM', 'FKM (Viton)', 'Red Silicone', 'Translucent Silicone', 'White Silicone']
    },
    {
      id: 'envelope',
      thickness: '3/64"',
      materials: ['PTFE', 'NBR']
    }
  ]

  const sizes = [
    { dimension: '1/2"', id: '3/8"', od: '1"' },
    { dimension: '3/4"', id: '5/8"', od: '1"' },
    { dimension: '1"', id: '7/8"', od: '2"' },
    { dimension: '1 1/2"', id: '1 3/8"', od: '2"' },
    { dimension: '2"', id: '1 7/8"', od: '2 1/2"' },
    { dimension: '2 1/2"', id: '2 3/8"', od: '3"' },
    { dimension: '3"', id: '2 7/8"', od: '3 1/2"' },
    { dimension: '4"', id: '3 7/8"', od: '4 1/2"' },
    { dimension: '5"', id: '4 3/4"', od: '5 1/2"' },
    { dimension: '6"', id: '5 3/4"', od: '6 1/2"' },
    { dimension: '8"', id: '7 3/4"', od: '8 1/2"' },
    { dimension: '10"', id: '9 11/16"', od: '10 1/2"' },
    { dimension: '12"', id: '11 11/16"', od: '12 1/2"' },
  ]

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

  // Get translated names - safe for hydration
  const getGasketTypeName = (id: string) => {
    if (id === 'standard') return t?.products?.standardType || 'Standard Tri-Clamp'
    if (id === 'flanged') return t?.products?.flangedType || 'Flanged Tri-Clamp'
    if (id === 'envelope') return t?.products?.envelopeType || 'Teflon Envelope'
    return ''
  }

  const getGasketTypeDescription = (id: string) => {
    if (id === 'standard') return t?.products?.standardDescription || 'Basic sealing solution for standard applications'
    if (id === 'flanged') return t?.products?.flangedDescription || 'Enhanced sealing with integrated bead design'
    if (id === 'envelope') return t?.products?.envelopeDescription || 'Chemical-resistant with PTFE coating'
    return ''
  }

  const currentType = gasketTypesData.find(type => type.id === selectedType) || gasketTypesData[0]
  const currentMaterials = selectedMaterialCategory === 'rubber' ? rubberMaterials : plasticMaterials

  return (
    <section id="products" className="py-24 bg-gray-50">
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
            {t?.products?.title || 'Product Catalog'}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {t?.products?.subtitle || 'Precision-engineered gaskets for Tri-Clamp applications. Available in multiple materials and sizes to meet your specifications.'}
          </p>
        </motion.div>

        {/* Bot Introduction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-200 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 text-sm font-bold">
                <Search className="w-4 h-4" />
                {t?.products?.productSelector || 'PRODUCT SELECTOR'}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {t?.products?.findPerfect || 'Find Your Perfect Gasket'}
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                {t?.products?.selectorDescription || 'Select the gasket type that matches your application requirements. All dimensions are approximate and meet industry standards.'}
              </p>
              <a
                href="/gasket.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <Download className="w-5 h-5" />
                {t?.products?.downloadCatalog || 'Download Full Catalog'}
              </a>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Image
                src="/botmefrup.png"
                alt="MEFRUP Assistant"
                width={300}
                height={400}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            {t?.products?.selectType || 'Select Gasket Type'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {gasketTypesData.map((type, index) => (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedType(type.id)}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  selectedType === type.id
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white border-gray-200 hover:border-primary/50 shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`text-lg font-bold ${selectedType === type.id ? 'text-white' : 'text-foreground'}`}>
                    {getGasketTypeName(type.id)}
                  </h4>
                  {selectedType === type.id && (
                    <CheckCircle className="w-6 h-6 text-accent" />
                  )}
                </div>
                <p className={`text-sm mb-3 ${selectedType === type.id ? 'text-white/90' : 'text-secondary'}`}>
                  {getGasketTypeDescription(type.id)}
                </p>
                <div className={`text-xs font-mono ${selectedType === type.id ? 'text-accent' : 'text-primary'}`}>
                  {t?.products?.thickness || 'Thickness'}: {type.thickness}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            {getGasketTypeName(currentType.id)} - {t?.products?.availableDimensions || 'Available Dimensions'}
          </h3>

          {/* Dimensions Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-foreground">{t?.products?.size || 'Size'}</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">{t?.products?.innerDiameter || 'Inner Diameter (ID)'}</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">{t?.products?.outerDiameter || 'Outer Diameter (OD)'}</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size, index) => (
                  <motion.tr
                    key={size.dimension}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.03, duration: 0.4 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-primary">{size.dimension}</td>
                    <td className="py-3 px-4 font-mono text-secondary">{size.id}</td>
                    <td className="py-3 px-4 font-mono text-secondary">{size.od}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Materials */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-bold text-foreground mb-4">{t?.products?.availableMaterials || 'Available Materials'}:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentType.materials.map((material, index) => (
                <motion.div
                  key={material}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200"
                >
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{material}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Materials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            {t?.products?.materialsTitle || 'Available Materials'}
          </h3>
          <p className="text-secondary text-center mb-8 max-w-3xl mx-auto">
            {t?.products?.materialsSubtitle || 'We offer a comprehensive range of rubber compounds and engineering plastics to meet your specific application requirements.'}
          </p>

          {/* Material Category Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMaterialCategory('rubber')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedMaterialCategory === 'rubber'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-foreground border-2 border-gray-200 hover:border-primary/50'
              }`}
            >
              <Shield className="w-5 h-5" />
              {t?.materials?.rubberCompounds || 'Rubber Compounds'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMaterialCategory('plastic')}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedMaterialCategory === 'plastic'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-foreground border-2 border-gray-200 hover:border-primary/50'
              }`}
            >
              <Wrench className="w-5 h-5" />
              {t?.materials?.engineeringPlastics || 'Engineering Plastics'}
            </motion.button>
          </div>

          {/* Materials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMaterials.map((material, index) => (
              <motion.div
                key={material.code}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-lg"
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

                <div className="flex items-center gap-2 text-xs font-mono bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                  <Thermometer className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-bold">{material.tempRange}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Material Category Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                {selectedMaterialCategory === 'rubber' ? (
                  <Shield className="w-6 h-6 text-primary" />
                ) : (
                  <Wrench className="w-6 h-6 text-primary" />
                )}
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  {selectedMaterialCategory === 'rubber'
                    ? (t?.materials?.rubberCompounds || 'Rubber Compounds')
                    : (t?.materials?.engineeringPlastics || 'Engineering Plastics (Injection Molded)')}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {selectedMaterialCategory === 'rubber'
                    ? (t?.products?.rubberInfo || 'Our rubber compounds are selected for their specific resistance properties, temperature ranges, and application suitability. All materials meet or exceed industry standards for sealing applications.')
                    : (t?.products?.plasticsInfo || 'Engineering-grade thermoplastics manufactured through precision injection molding. These materials provide excellent mechanical properties, dimensional stability, and chemical resistance for demanding applications.')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center bg-primary text-white p-12 rounded-3xl shadow-lg border-2 border-primary-dark"
        >
          <h3 className="text-3xl font-bold mb-4">{t?.products?.needCustom || 'Need a Custom Solution?'}</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t?.products?.customDescription || 'We manufacture components to your exact specifications. Contact us to discuss your material and design requirements.'}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            {t?.products?.requestCustomQuote || 'Request Custom Quote'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
