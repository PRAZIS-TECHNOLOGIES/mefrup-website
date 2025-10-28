'use client'

import { motion } from 'framer-motion'
import { MapPin, Send, Clock } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        alert('Thank you! We will contact you within 24 hours.')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        console.error('Error:', data)
        alert('There was an error sending your request. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error sending your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
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
            {t?.contact?.title || 'Get a Quote'}
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            {t?.contact?.subtitle || "Send us your requirements and we'll respond within 24 hours with technical specifications and pricing."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 flex justify-center mb-4"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 max-w-md w-full">
              <div className="flex items-center gap-4 justify-center">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">{t?.contact?.responseTime || 'Response Time'}</p>
                  <p className="font-bold text-foreground">
                    {t?.contact?.within24 || 'Within 24 hours'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border-2 border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                    {t?.contact?.name || 'Name'} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 text-foreground"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    {t?.contact?.email || 'Email'} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 text-foreground"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2">
                  {t?.contact?.company || 'Company'}
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 text-foreground"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                  {t?.contact?.projectDetails || 'Project Details'} *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 resize-none text-foreground"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t?.contact?.projectPlaceholder || 'Tell us about your requirements: material type, dimensions, quantity, application...'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t?.contact?.sendRequest || 'Send Quote Request'}
                  </>
                )}
              </motion.button>

              <p className="text-sm text-secondary text-center">
                {t?.contact?.responseNote || "We'll respond with technical specifications and pricing within 24 hours."}
              </p>
            </form>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Certification Badge */}
            <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-2">
                {t?.contact?.iatfCertified || 'IATF 16949:2016'}
              </h4>
              <p className="text-sm opacity-90 mb-1">
                {t?.contact?.dqsCertified || 'DQS Germany Certified'}
              </p>
              <p className="text-xs opacity-75">
                {t?.contact?.validUntil || 'Valid until July 14, 2028'}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{t?.contact?.location || 'Location'}</h4>
                  <p className="text-sm text-secondary">Mexico</p>
                </div>
              </div>
              <p className="text-sm text-secondary">
                {t?.contact?.locationText || 'Manufacturing facility serving customers across Mexico and the United States.'}
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="font-bold text-foreground mb-4">{t?.contact?.whyChoose || 'Why Choose Us'}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">{t?.contact?.experience || '22+ years experience'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">{t?.contact?.certified || 'OEM/ORM certified'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">{t?.contact?.fastTurnaround || 'Fast turnaround'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">{t?.contact?.customSolutions || 'Custom solutions'}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
