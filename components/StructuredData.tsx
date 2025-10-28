export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MEFRUP Group LLC",
    "url": "https://www.mefrup.com",
    "logo": "https://www.mefrup.com/logomefrup.png",
    "description": "IATF 16949:2016 certified manufacturer of automotive gaskets, seals, and precision rubber components.",
    "foundingDate": "2002",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX",
      "addressLocality": "Mexico"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@mefrup.com",
      "contactType": "sales",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://facebook.com/mefrup",
      "https://twitter.com/Mefrup",
      "https://instagram.com/Mefrup_",
      "https://linkedin.com/company/mefrup",
      "https://youtube.com/mefrup"
    ]
  }

  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": "MEFRUP Group LLC",
    "url": "https://www.mefrup.com",
    "description": "Precision manufacturer of automotive gaskets and rubber components with IATF 16949:2016 certification",
    "brand": {
      "@type": "Brand",
      "name": "MEFRUP"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Automotive Gaskets",
          "description": "Tri-Clamp gaskets in multiple materials: NBR, EPDM, Viton, Silicone"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Industrial Rubber Seals",
          "description": "Vulcanized rubber sealing components for industrial applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Injection Molded Plastic Parts",
          "description": "Engineering plastics including Nylon, POM, PEEK, and other high-performance materials"
        }
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MEFRUP Group LLC",
    "image": "https://www.mefrup.com/logomefrup.png",
    "url": "https://www.mefrup.com",
    "telephone": "+52-XXX-XXX-XXXX",
    "email": "info@mefrup.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "MX"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
