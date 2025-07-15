import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">Tina Peng</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Fractional SaaS Marketing Consultant
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Helping B2B SaaS companies scale with expert-level marketing leadership. 
                Strategic consulting in product marketing, GTM, and customer growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 text-center">
                  Get Started
                </a>
                <a href="#services" className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👋</span>
                    </div>
                    <p className="text-white/70">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Strategic marketing leadership without the full-time commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Go-to-Market Strategy</h3>
              <p className="text-white/70">
                Launch new products and features with confidence. Strategic planning, positioning, and execution.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Growth Marketing</h3>
              <p className="text-white/70">
                Data-driven strategies to accelerate customer acquisition and retention for sustainable growth.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Product Marketing</h3>
              <p className="text-white/70">
                Position your product for success with compelling messaging, competitive analysis, and market research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience & Expertise
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Proven track record helping SaaS companies achieve their growth goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70">Years in SaaS Marketing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">200%</div>
              <div className="text-white/70">Average Growth Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your SaaS?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how fractional marketing leadership can accelerate your growth
          </p>
          <a href="mailto:hello@tinapeng.ca" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Tina Peng. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App