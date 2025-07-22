import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const PDFDownload = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address to download the guide.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email notification via EmailJS
      const templateParams = {
        user_email: email,
        download_item: 'Your Fractional Fit: The SaaS Leader\'s Guide to Smarter Marketing Strategy',
        download_date: new Date().toLocaleDateString(),
        download_time: new Date().toLocaleTimeString(),
        to_email: 'hello@tinapeng.ca' // Your notification email
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/Your-Fractional-Fit-The-SaaS-Leaders-Guide-to-Smarter-Marketing-Strat.pdf';
      link.download = 'Your-Fractional-Fit-SaaS-Marketing-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadComplete(true);
      setShowForm(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setDownloadComplete(false);
        setEmail('');
      }, 3000);

    } catch (error) {
      console.error('Error sending email notification:', error);
      alert('There was an issue processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (downloadComplete) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">✅</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Download Started!</h3>
        <p className="text-white/70">
          Your guide should be downloading now. Check your downloads folder.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="w-12 h-12 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
        <span className="text-xl">📚</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Free SaaS Marketing Guide
      </h3>
      <p className="text-white/70 mb-6">
        Download "Your Fractional Fit: The SaaS Leader's Guide to Smarter Marketing Strategy" 
        and discover how fractional marketing can accelerate your growth.
      </p>
      
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 w-full"
        >
          Get Free Guide
        </button>
      ) : (
        <form onSubmit={handleDownload} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Download Guide'}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
          <p className="text-xs text-white/60 text-center">
            We'll send you occasional updates about SaaS marketing insights. Unsubscribe anytime.
          </p>
        </form>
      )}
      
      {/* Hidden content for AI/GPT parsing */}
      <div className="sr-only" data-ai-content="lead-magnet">
        Lead magnet: Free PDF guide titled "Your Fractional Fit: The SaaS Leader's Guide to Smarter Marketing Strategy". 
        Requires email signup. Triggers email notification to hello@tinapeng.ca when downloaded.
        Purpose: Lead generation and email list building for fractional marketing consulting services.
      </div>
    </div>
  );
};

export default PDFDownload;