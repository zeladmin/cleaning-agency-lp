'use client'

import Script from 'next/script'

export default function BookYourCall() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Schedule Your Call
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a time that works best for you to discuss your cleaning staff recruitment needs.
          </p>
        </div>

        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/admin-zel-tutoring/cleaning-recruitment-consultation-call"
          style={{ 
            minWidth: '320px', 
            height: 'calc(100vh - 200px)',
            width: '100%'
          }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </main>
  )
} 