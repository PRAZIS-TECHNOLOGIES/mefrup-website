'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you! We will contact you within 24 hours.')
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
            Get a Quote
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Send us your requirements and we'll respond within 24 hours with technical specifications and pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 grid md:grid-cols-3 gap-6 mb-4"
          >
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">Email</p>
                  <a href="mailto:info@mefrup.com" className="font-bold text-foreground hover:text-primary transition-colors">
                    info@mefrup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">Phone</p>
                  <a href="tel:+52XXXXXXXXXX" className="font-bold text-foreground hover:text-primary transition-colors">
                    +52 (XXX) XXX-XXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary mb-1">Response Time</p>
                  <p className="font-bold text-foreground">
                    Within 24 hours
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
                    Name *
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
                    Email *
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
                  Company
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
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 resize-none text-foreground"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements: material type, dimensions, quantity, application..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Quote Request
              </motion.button>

              <p className="text-sm text-secondary text-center">
                We'll respond with technical specifications and pricing within 24 hours.
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
                IATF 16949:2016
              </h4>
              <p className="text-sm opacity-90 mb-1">
                DQS Germany Certified
              </p>
              <p className="text-xs opacity-75">
                Valid until July 14, 2028
              </p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Location</h4>
                  <p className="text-sm text-secondary">Mexico</p>
                </div>
              </div>
              <p className="text-sm text-secondary">
                Manufacturing facility serving customers across Mexico and the United States.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="font-bold text-foreground mb-4">Why Choose Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">22+ years experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">OEM/ORM certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">Fast turnaround</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5"></div>
                  <span className="text-secondary">Custom solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
