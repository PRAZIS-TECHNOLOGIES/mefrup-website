import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'Products - Tri-Clamp Gaskets & Seals Catalog | MEFRUP',
  description: 'Complete catalog of tri-clamp gaskets, rubber seals, and industrial gaskets. Available in NBR, EPDM, Viton, Silicone, PTFE. All sizes from 1/2" to 12". Download full specifications.',
  keywords: 'tri-clamp gaskets, flanged gaskets, teflon envelope gaskets, NBR gaskets, EPDM seals, Viton gaskets, silicone gaskets, industrial seals, gasket catalog, rubber gaskets',
  openGraph: {
    title: 'Product Catalog - Automotive & Industrial Gaskets | MEFRUP',
    description: 'Browse our complete gasket catalog. Tri-clamp, flanged, and PTFE envelope gaskets in all sizes and materials.',
    url: 'https://www.mefrup.com/products',
  },
}

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
