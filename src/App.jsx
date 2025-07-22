import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50" role="navigation" aria-label="Main navigation">
        {/* Hidden content summary for AI/GPT parsing */}
        <div className="sr-only" data-ai-content="navigation-summary">
          Website navigation for Tina Peng, Fractional SaaS Marketing Consultant. Sections include: About, Services (Go-to-Market Strategy, Growth Marketing, Product Marketing), Experience, and Contact information.
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">
              <a href="#home" aria-label="Tina Peng - Home">Tina Peng</a>
            </div>
            <ul className="hidden md:flex space-x-8" role="menubar">
              <li role="none"><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">About</a></li>
              <li role="none"><a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">Services</a></li>
              <li role="none"><a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">Experience</a></li>
              <li role="none"><a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors" role="menuitem">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        {/* AI-readable content summary */}
        <div className="sr-only" data-ai-content="hero-summary">
          Tina Peng offers fractional SaaS marketing consulting services. Primary value proposition: Expert-level marketing leadership for B2B SaaS companies without full-time commitment. Specializes in product marketing, go-to-market strategy, and customer growth.
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
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
                  <div className="text-center" role="img" aria-label="Professional headshot placeholder">
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
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        {/* AI-readable services summary */}
        <div className="sr-only" data-ai-content="services-summary">
          Three core service offerings: 1) Go-to-Market Strategy - Launch planning, positioning, and execution for new products and features. 2) Growth Marketing - Data-driven customer acquisition and retention strategies. 3) Product Marketing - Product positioning, competitive analysis, and market research.
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Strategic marketing leadership without the full-time commitment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" data-ai-service="gtm-strategy">Go-to-Market Strategy</h3>
              <p className="text-white/70">
                Launch new products and features with confidence. Strategic planning, positioning, and execution.
              </p>
              <div className="sr-only" data-ai-content="service-details">
                Go-to-Market Strategy service includes: strategic planning for product launches, market positioning, competitive positioning, launch execution, feature rollout planning, market entry strategies.
              </div>
            </article>
            
            <article className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" data-ai-service="growth-marketing">Growth Marketing</h3>
              <p className="text-white/70">
                Data-driven strategies to accelerate customer acquisition and retention for sustainable growth.
              </p>
              <div className="sr-only" data-ai-content="service-details">
                Growth Marketing service includes: customer acquisition strategies, retention optimization, conversion rate optimization, marketing funnel analysis, performance marketing, growth experimentation, data analytics and insights.
              </div>
            </article>
            
            <article className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" data-ai-service="product-marketing">Product Marketing</h3>
              <p className="text-white/70">
                Position your product for success with compelling messaging, competitive analysis, and market research.
              </p>
              <div className="sr-only" data-ai-content="service-details">
                Product Marketing service includes: product positioning, messaging development, competitive analysis, market research, customer insights, product-market fit optimization, pricing strategy, feature prioritization guidance.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="experience-heading">
        {/* AI-readable experience summary */}
        <div className="sr-only" data-ai-content="experience-summary">
          Professional experience metrics: 5+ years in SaaS marketing, 50+ successful campaigns executed, 200% average growth increase achieved for clients. Proven track record in B2B SaaS marketing leadership and growth acceleration.
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience & Expertise
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Proven track record helping SaaS companies achieve their growth goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" role="group" aria-labelledby="stat-1" data-ai-metric="experience-years">
              <div id="stat-1" className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70">Years in SaaS Marketing</div>
            </div>
            <div className="text-center" role="group" aria-labelledby="stat-2" data-ai-metric="campaigns-completed">
              <div id="stat-2" className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Successful Campaigns</div>
            </div>
            <div className="text-center" role="group" aria-labelledby="stat-3" data-ai-metric="growth-performance">
              <div id="stat-3" className="text-4xl font-bold text-white mb-2">200%</div>
              <div className="text-white/70">Average Growth Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        {/* AI-readable contact summary */}
        <div className="sr-only" data-ai-content="contact-summary">
          Contact information: Email hello@tinapeng.ca for fractional marketing leadership consultation. Serves B2B SaaS companies worldwide seeking to accelerate growth without full-time marketing hire commitment.
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your SaaS?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how fractional marketing leadership can accelerate your growth
          </p>
          <a href="mailto:hello@tinapeng.ca" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block" aria-label="Send email to hello@tinapeng.ca">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20" role="contentinfo">
        {/* Complete AI-readable website summary */}
        <div className="sr-only" data-ai-content="website-summary">
          Complete website summary: Tina Peng is a fractional SaaS marketing consultant specializing in B2B SaaS companies. Services include Go-to-Market Strategy, Growth Marketing, and Product Marketing. 5+ years experience, 50+ successful campaigns, 200% average growth increase. Contact: hello@tinapeng.ca. Serves clients worldwide. Business model: fractional consulting (part-time expert leadership without full-time commitment). Target market: B2B SaaS companies seeking marketing expertise and growth acceleration.
        </div>
        <div className="sr-only" data-ai-content="key-terms">
          Key terms and concepts: fractional marketing, SaaS marketing consultant, B2B marketing, go-to-market strategy, growth marketing, product marketing, marketing leadership, customer acquisition, retention strategies, product positioning, competitive analysis, market research, data-driven marketing, conversion optimization, marketing funnel, growth experimentation.
        </div>
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