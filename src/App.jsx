import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Award,
  Check,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Send,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

const BRAND = 'Tina Peng GTM Consulting'
const CTA_LABEL = 'Book a 30-minute call'

const RED = '#DA1B2E'
const DARK_RED = '#790C1C'
const INK = '#1F1E1E'
const BODY = '#3B3535'
const PINK = '#F9D2D6'
const BLUSH = '#FFF6F7'
const GRADIENT = `linear-gradient(135deg, ${RED} 0%, ${DARK_RED} 100%)`
const GRADIENT_HOVER = `linear-gradient(135deg, ${DARK_RED} 0%, ${RED} 100%)`

const services = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Marketing Assessment & Strategy',
    description:
      'Get clear on your market, buyer, competitive landscape, and where marketing can have the greatest impact.',
    features: [
      'Marketing audit and assessment',
      'Competitive and alternative analysis',
      'Focused strategy with clear priorities and milestones',
    ],
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Positioning & Messaging',
    description:
      'Make complex products easier for specialized buyers to understand, evaluate, and choose.',
    features: [
      'Ideal customer profile (ICP) and buying process',
      'Differentiation from competitors and alternatives',
      'Buyer-focused positioning and messaging',
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Go-to-Market Strategy & Execution',
    description:
      'Build a focused, repeatable go-to-market approach around how your buyers actually make decisions.',
    features: [
      'Go-to-market strategy and priorities',
      'Content and campaign plan',
      'Sales enablement and launch support',
    ],
  },
]

const challenges = [
  {
    title: 'Buyers struggle to see your value',
    text: 'Your product solves a real problem, but its complexity makes the value difficult to communicate to the people who need to buy it.',
  },
  {
    title: 'Deals take too long',
    text: 'Multiple stakeholders, specialized buyers, and long sales cycles make it harder to build momentum and move deals forward.',
  },
  {
    title: 'Marketing feels scattered',
    text: `You're already "doing marketing", but the team lacks a clear understanding of who to target, what to say, and where to focus.`,
  },
]

const heroProof = [
  { icon: Clock, text: '15+ years in B2B technology marketing' },
  { icon: TrendingUp, text: '$300M+ product portfolios led' },
  { icon: Award, text: 'MBA & Senior Marketing Leader' },
  { icon: MapPin, text: 'Vancouver, BC · Pacific Time' },
]

const guideHighlights = [
  {
    title: 'Strategic Framework',
    text: 'Connect your positioning, buyers, and go-to-market strategy',
  },
  {
    title: 'Key Metrics',
    text: 'Focus on the metrics that matter for your growth model',
  },
  {
    title: 'Channel Tactics',
    text: 'Choose the channels and tactics that fit your buyers',
  },
  {
    title: 'Step-by-Step Roadmap',
    text: 'A practical roadmap for turning strategy into action',
  },
]

const testimonials = [
  {
    name: 'Adam F.',
    company: 'Moonlite Labs',
    content:
      "Tina's guidance during the launch of our generative-AI platform, Moonlite Labs, was tremendously helpful. Her ability to quickly understand the product, ideal customers, and adapt to new insights set us up for a strong strategic foundation for future growth. She's professional, experienced, and works great in a team environment. Timely, organized, and knows what she's doing.",
  },
  {
    name: 'Brett Z.',
    company: 'North Forge',
    content:
      "Tina is an outstanding strategic partner. Working quickly to understand our needs, even the ones we hadn't fully articulated. Her B2B experience came through in every decision, helping us avoid wasted effort and focus on what mattered most. She delivered work that made a real difference to our project.",
  },
  {
    name: 'Chang L.',
    company: 'Plenish',
    content:
      "It's refreshing to work with a marketer who excels at both strategy and execution. Tina stays on top of the latest AI tools and trends, and she gave us a tailored, realistic plan that fit our goals and internal capacity perfectly.",
  },
]

const employers = [
  {
    name: 'Kodak',
    logo: 'https://cdn.brandfetch.io/idlKZb_dsq/w/392/h/216/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1721814294183',
    alt: 'Kodak logo',
  },
  {
    name: 'Norsat International',
    logo: 'https://cdn.brandfetch.io/idpIYdDSMo/w/291/h/291/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1751817892059',
    alt: 'Norsat International logo',
  },
  {
    name: 'one45 Software',
    note: 'now Acuity Insights',
    logo: 'https://cdn.brandfetch.io/idop32VIqy/w/1961/h/1961/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1748356946718',
    alt: 'one45 Software logo',
  },
  {
    name: 'Sage',
    logo: 'https://cdn.brandfetch.io/id5Uo3Wak-/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1703869842000',
    alt: 'Sage logo',
  },
]

const aboutParagraphs = [
  "I'm a fractional marketing leader with 15+ years of experience helping technology companies position and take complex products to market. I've worked with startup founders and enterprise teams across AI, SaaS, defence, healthcare, education, and other specialized markets and I've led multi-product portfolios worth more than $300M.",
  'I bring together the strategic thinking of a product marketer with the senior leadership needed to turn that thinking into action. My work spans ICP definition, positioning and differentiation, buyer messaging, sales enablement, launches, and repeatable go-to-market strategy. I hold an MBA from UBC, with international study at Yale, Hitotsubashi ICS, and WU Vienna.',
  "If you're working through positioning, go-to-market, or how to turn scattered marketing into a focused plan, let's talk.",
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'resources', label: 'Free GTM Guide' },
  { id: 'about', label: 'About' },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [pdfFormData, setPdfFormData] = useState({ name: '', email: '', company: '' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePdfInputChange = (e) => {
    setPdfFormData({ ...pdfFormData, [e.target.name]: e.target.value })
  }

  // Contact form. EmailJS logic and IDs are unchanged from the original build.
  const handleSubmit = (e) => {
    e.preventDefault()
    const submitButton = e.target.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    const serviceId = 'service_9hbzk2t'
    const templateId = 'template_vedn5e3'
    const publicKey = 'mua72SYd-F-UG8gGg'
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_email: 'hello@tinapeng.ca',
    }
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert("Thank you! Your message has been sent successfully. I'll get back to you shortly.")
        setFormData({ name: '', email: '', company: '', message: '' })
      })
      .catch((error) => {
        console.error('FAILED...', error)
        alert('Sorry, there was an error sending your message. Please email me directly at hello@tinapeng.ca')
      })
      .finally(() => {
        submitButton.textContent = originalText
        submitButton.disabled = false
      })
  }

  // PDF download form. EmailJS logic and IDs are unchanged from the original build.
  const handlePdfDownload = (e) => {
    e.preventDefault()
    const submitButton = e.target.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    const serviceId = 'service_9hbzk2t'
    const templateId = 'template_hxqw1fi'
    const publicKey = 'mua72SYd-F-UG8gGg'
    const templateParams = {
      from_name: pdfFormData.name,
      from_email: pdfFormData.email,
      company: pdfFormData.company,
      message: 'User downloaded the B2B SaaS Marketing Playbook PDF',
      to_email: 'hello@tinapeng.ca',
    }
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('PDF download notification sent successfully!', response.status, response.text)
        const downloadUrl =
          'https://tinapeng.ca/Your-Fractional-Fit-The-SaaS-Leaders-Guide-to-Smarter-Marketing-Strat.pdf'
        setTimeout(() => {
          const downloadLink = document.createElement('a')
          downloadLink.href = downloadUrl
          downloadLink.download = 'B2B-SaaS-Marketing-Playbook.pdf'
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
          alert(
            "Thank you! Your download should begin shortly and I've been notified of your interest. If the download doesn't start automatically, please check your downloads folder or contact me at hello@tinapeng.ca",
          )
          setPdfFormData({ name: '', email: '', company: '' })
          submitButton.textContent = originalText
          submitButton.disabled = false
        }, 1500)
      })
      .catch((error) => {
        console.error('Failed to send PDF download notification:', error)
        const downloadUrl =
          'https://tinapeng.ca/Your-Fractional-Fit-The-SaaS-Leaders-Guide-to-Smarter-Marketing-Strat.pdf'
        setTimeout(() => {
          const downloadLink = document.createElement('a')
          downloadLink.href = downloadUrl
          downloadLink.download = 'B2B-SaaS-Marketing-Playbook.pdf'
          document.body.appendChild(downloadLink)
          downloadLink.click()
          document.body.removeChild(downloadLink)
          alert(
            "Your download should begin shortly. If it doesn't start automatically, please check your downloads folder or contact me at hello@tinapeng.ca",
          )
          setPdfFormData({ name: '', email: '', company: '' })
          submitButton.textContent = originalText
          submitButton.disabled = false
        }, 1500)
      })
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:border-transparent'
  const ringStyle = { '--tw-ring-color': RED }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: GRADIENT }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <a href="#home" className="text-xl font-bold text-gray-900">
                  {BRAND}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => {
                  const color = index === 0 ? INK : BODY
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="px-3 py-2 text-sm font-medium transition-colors"
                      style={{ color }}
                      onMouseEnter={(e) => (e.target.style.color = RED)}
                      onMouseLeave={(e) => (e.target.style.color = color)}
                    >
                      {item.label}
                    </button>
                  )
                })}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: RED }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = DARK_RED)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = RED)}
                >
                  {CTA_LABEL}
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item, index) => {
                const color = index === 0 ? INK : BODY
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium transition-colors"
                    style={{ color }}
                    onMouseEnter={(e) => (e.target.style.color = RED)}
                    onMouseLeave={(e) => (e.target.style.color = color)}
                  >
                    {item.label}
                  </button>
                )
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-white rounded-lg transition-colors"
                style={{ backgroundColor: RED }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = DARK_RED)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = RED)}
              >
                {CTA_LABEL}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-16"
        style={{ background: `linear-gradient(135deg, ${BLUSH} 0%, #ffffff 50%, ${PINK} 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: RED }}>
                Fractional Marketing Leader
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: INK }}>
                Go-to-market strategy
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: GRADIENT, WebkitBackgroundClip: 'text' }}
                >
                  {' '}
                  for complex, niche markets
                </span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed" style={{ color: BODY }}>
                I help tech companies with complex products, specialized buyers, and long sales cycles sharpen their positioning,
                messaging, and go-to-market strategy.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  style={{ background: GRADIENT }}
                  onMouseEnter={(e) => (e.target.style.background = GRADIENT_HOVER)}
                  onMouseLeave={(e) => (e.target.style.background = GRADIENT)}
                >
                  {CTA_LABEL}
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 px-8 py-4 rounded-lg font-semibold transition-colors"
                  style={{ borderColor: PINK, color: BODY }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = RED
                    e.target.style.color = RED
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = PINK
                    e.target.style.color = BODY
                  }}
                >
                  See Services
                </button>
              </div>
              <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                {heroProof.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon className="w-5 h-5" style={{ color: RED }} />
                    <span className="text-sm" style={{ color: BODY }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl transform rotate-3" style={{ background: GRADIENT }} />
                <img
                  src="https://tinapengmba5.wordpress.com/wp-content/uploads/2025/07/team.png"
                  alt="Marketing team planning a go-to-market strategy"
                  className="relative rounded-2xl shadow-2xl object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="py-20" style={{ backgroundColor: BLUSH }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: INK }}>
              When companies bring me in
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: BODY }}>
              I help technology companies make complex products easier to understand, differentiate, and sell.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm border-t-4" style={{ borderColor: RED }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: INK }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: BODY }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: INK }}>
              How I Help
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: BODY }}>
              Focused marketing leadership for complex products and niche markets.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform" style={{ color: RED }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: INK }}>
                  {service.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: BODY }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm" style={{ color: BODY }}>
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: RED }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free guide */}
      <section id="resources" className="py-20" style={{ background: `linear-gradient(135deg, ${BLUSH} 0%, ${PINK} 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: GRADIENT }}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: PINK, color: DARK_RED }}
                >
                  Free Resource
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: INK }}>
                The B2B Go-to-Market Playbook
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: BODY }}>
                A practical guide to turning your positioning, buyers, and marketing priorities into a focused go-to-market plan.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {guideHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: RED }} />
                    <div>
                      <h3 className="font-semibold" style={{ color: INK }}>
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: BODY }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: GRADIENT }}
                  >
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: INK }}>
                    Download Your Free Guide
                  </h3>
                  <p style={{ color: BODY }}>Enter your email. The download starts right away.</p>
                </div>
                <form onSubmit={handlePdfDownload} className="space-y-4">
                  <div>
                    <label htmlFor="wp-email" className="block text-sm font-medium mb-2" style={{ color: BODY }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="wp-email"
                      name="email"
                      value={pdfFormData.email}
                      onChange={handlePdfInputChange}
                      required
                      className={inputClass}
                      style={ringStyle}
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                    style={{ background: GRADIENT }}
                    onMouseEnter={(e) => (e.target.style.background = GRADIENT_HOVER)}
                    onMouseLeave={(e) => (e.target.style.background = GRADIENT)}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Free Guide
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials, experience, about */}
      <section id="about" className="py-20" style={{ backgroundColor: BLUSH }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: INK }}>
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="bg-white rounded-xl p-8 shadow-lg">
                <blockquote className="mb-6 italic" style={{ color: BODY }}>
                  "{testimonial.content}"
                </blockquote>
                <figcaption>
                  <p className="font-semibold" style={{ color: INK }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: BODY }}>
                    {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div id="experience" className="mt-20 mb-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: INK }}>
                Where I've Worked
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: BODY }}>
                15+ years of product marketing, positioning, and go-to-market experience across complex B2B technology products.
              </p>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
              {employers.map((employer) => (
                <li key={employer.name} className="group flex flex-col items-center text-center">
                  <div className="w-40 h-24 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105">
                    <img
                      src={employer.logo}
                      alt={employer.alt}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 min-h-[2.5rem]">
                    <p className="text-sm font-medium" style={{ color: '#666666' }}>
                      {employer.name}
                    </p>
                    {employer.note && (
                      <p className="text-xs" style={{ color: '#999999' }}>
                        {employer.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-4 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src="https://tinapengmba5.wordpress.com/wp-content/uploads/2025/07/tinapeng.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Tina Peng, fractional marketing leader"
                    className="w-80 h-80 object-cover rounded-full shadow-lg border-4"
                    style={{ borderColor: RED }}
                  />
                </div>
              </div>
              <div className="lg:col-span-8 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: INK }}>
                  Hi, I'm Tina Peng
                </h2>
                {aboutParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed ${index === aboutParagraphs.length - 1 ? 'mb-0' : 'mb-6'}`}
                    style={{ color: BODY }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20" style={{ background: GRADIENT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's talk about your go-to-market</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: PINK }}>
              Share a few details about your company and what you're working on. I'll follow up to set up a free
              30-minute call.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: BODY }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={inputClass}
                        style={ringStyle}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: BODY }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClass}
                        style={ringStyle}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: BODY }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClass}
                      style={ringStyle}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: BODY }}>
                      What are you working on? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`${inputClass} resize-none`}
                      style={ringStyle}
                      placeholder="For example: a product launch, a new market, or positioning that isn't landing with buyers"
                    />
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <button
                      type="submit"
                      className="text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group min-w-[200px]"
                      style={{ background: GRADIENT }}
                      onMouseEnter={(e) => (e.target.style.background = GRADIENT_HOVER)}
                      onMouseLeave={(e) => (e.target.style.background = GRADIENT)}
                    >
                      {CTA_LABEL}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Not sure if you're ready for fractional support?</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Start with the free guide. It covers the basics of a strong go-to-market plan.
                </p>
                <div>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="w-full text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                      border: '1px solid rgba(255,255,255,0.3)',
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background =
                        'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)')
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)')
                    }
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download the Guide
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/tinapeng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors underline decoration-white/40 hover:decoration-white"
                  >
                    linkedin.com/in/tinapeng
                  </a>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <a
                    href="mailto:hello@tinapeng.ca"
                    className="text-white/80 hover:text-white transition-colors underline decoration-white/40 hover:decoration-white"
                  >
                    hello@tinapeng.ca
                  </a>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Location</h4>
                  <p className="text-white/80">Vancouver, BC · Pacific Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: GRADIENT }}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">{BRAND}</span>
            </div>
            <p className="mb-6" style={{ color: PINK }}>
              Clarify Your Positioning · Sharpen Your Message · Build Your GTM
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/tinapeng/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: PINK }}
                onMouseEnter={(e) => (e.target.style.color = RED)}
                onMouseLeave={(e) => (e.target.style.color = PINK)}
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@tinapeng.ca"
                className="transition-colors"
                style={{ color: PINK }}
                onMouseEnter={(e) => (e.target.style.color = RED)}
                onMouseLeave={(e) => (e.target.style.color = PINK)}
              >
                Email
              </a>
            </div>
            <div className="mt-8 pt-8 border-t text-sm" style={{ borderColor: BODY, color: PINK }}>
              <p suppressHydrationWarning>
                © {new Date().getFullYear()} {BRAND}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
