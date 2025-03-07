import Link from 'next/link'

export default function InstantConsultation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Enhanced Headline Structure */}
        <div className="max-w-[1000px] mx-auto text-center mb-10 md:mb-12">
          {/* Top line - Problem Statement */}
          <div className="mb-4 md:mb-6">
            <span className="inline-block text-lg md:text-xl font-medium text-blue-600 bg-blue-50 px-5 py-2 rounded-full shadow-sm">
              Cleaning Companies struggling with recruiting...
            </span>
          </div>

          {/* Main Headline - Solution & Guarantee */}
          <h1 className="space-y-2 md:space-y-3 mb-6">
            <span className="block text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
              We&apos;ll Guarantee You The
            </span>
            <span className="block text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-[1.2]">
              Successful Placement
            </span>
            <span className="block text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] px-2">
              Of A Cleaning Employee Within 7 Days
            </span>
            <span className="block text-lg sm:text-2xl md:text-3xl font-semibold text-blue-600 mt-4">
              On A Completely Pay Per Placement Basis
            </span>
          </h1>

          {/* Bottom line - Call to Action */}
          <div className="mt-6">
            <span className="inline-block text-xl md:text-2xl font-medium text-gray-600 border-b-2 border-blue-300">
              Watch The Video Below To Find Out How...
            </span>
          </div>
        </div>

        {/* VSL Video Embed with Enhanced Design */}
        <div className="relative max-w-[1000px] mx-auto mb-12 md:mb-16">
          <div className="absolute inset-0 bg-blue-600 transform rotate-1 rounded-2xl opacity-10"></div>
          <div className="absolute inset-0 bg-blue-600 transform -rotate-1 rounded-2xl opacity-10"></div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/EConZYgDPNM?si=irVZuplR9oUk_QZY&autoplay=1&mute=1"
              title="Recruitment Process Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-blue-600 transform rotate-1 rounded-lg opacity-10"></div>
            <div className="absolute inset-0 bg-blue-600 transform -rotate-1 rounded-lg opacity-10"></div>
            <Link 
              href="/book-your-call" 
              className="relative inline-flex items-center px-8 py-4 text-xl md:text-2xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
            >
              <span>Schedule A Call</span>
              <svg 
                className="ml-2 w-6 h-6 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Enhanced Trust Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto mb-16 md:mb-20">
          {/* Success Rate */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-lg text-gray-700 font-medium">Successful Placements</div>
          </div>

          {/* Retention Rate */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-lg text-gray-700 font-medium">Placement Satisfaction</div>
          </div>

          {/* Speed */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">7 Day</div>
            <div className="text-lg text-gray-700 font-medium">Average Placement Time</div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-blue-50 rounded-xl p-10 md:p-12 max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Solve Your Staffing Challenges?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Book your call today and discover how our guaranteed placement service can transform your recruitment process.
          </p>
          <Link 
            href="/book-your-call" 
            className="inline-flex items-center px-8 py-4 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
          >
            <span>Schedule A Call</span>
            <svg 
              className="ml-2 w-6 h-6 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
} 