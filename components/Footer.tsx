import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Quality Standards', href: '#certifications' },
    ],
    services: [
      { name: 'Automotive Components', href: '#services' },
      { name: 'Industrial Parts', href: '#services' },
      { name: 'OEM Supply', href: '#services' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Request Quote', href: '#contact' },
      { name: 'Technical Support', href: '#contact' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/mefrup', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/Mefrup', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/Mefrup_', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/mefrup', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/mefrup', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/logomefrup.png"
                alt="MEFRUP Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Precision plastic and vulcanized rubber components for the automotive industry.
              IATF 16949:2016 certified with 22 years of manufacturing excellence.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@mefrup.com" className="hover:text-accent-dark transition-colors">
                info@mefrup.com
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-primary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-dark transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-sm text-gray-400 mb-1">Certified</p>
              <p className="font-bold text-accent-dark">IATF 16949:2016</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Audited By</p>
              <p className="font-bold">DQS Germany</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Valid Until</p>
              <p className="font-bold">July 14, 2028</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Established</p>
              <p className="font-bold">2003</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} MEFRUP Group LLC. All rights reserved.
          </p>
          <p className="text-center">
            Where German Standards Meet Mexican Agility
          </p>
        </div>
      </div>
    </footer>
  )
}
