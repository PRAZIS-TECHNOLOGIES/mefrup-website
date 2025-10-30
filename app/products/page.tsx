'use client'

import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Products />
      <Footer />
      <Chatbot />
    </main>
  )
}
