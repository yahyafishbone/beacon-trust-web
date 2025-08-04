
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, AlertTriangle, Eye, Users, DollarSign, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO } from '../hooks/useSEO';

const WhyBeaconTrust = () => {
  useSEO({
    title: 'Why Choose BeaconTrust',
    description: 'Discover why BeaconTrust is Kenya\'s most trusted real estate partner. Fraud protection, transparent pricing, verified properties, and professional service.',
    keywords: 'why choose BeaconTrust, trusted real estate Kenya, fraud protection, transparent pricing, verified properties, professional service'
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: protectionsRef, isVisible: protectionsVisible } = useScrollAnimation();
  const { elementRef: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const protections = [
    {
      icon: Shield,
      title: 'Fraud & Fake Titles',
      description: 'We verify land via official registries to ensure authenticity and legal ownership.'
    },
    {
      icon: Eye,
      title: 'Opaque Land Ownership',
      description: 'We clarify boundaries and claims to eliminate ownership disputes.'
    },
    {
      icon: DollarSign,
      title: 'Hidden Costs',
      description: 'All our fees are disclosed upfront with complete transparency.'
    },
    {
      icon: AlertTriangle,
      title: 'Dubious Brokers',
      description: 'We work only with vetted professionals you can trust.'
    },
    {
      icon: Users,
      title: 'Denied Credit Access',
      description: 'We help package your property for financing and connect you with lenders.'
    },
    {
      icon: Home,
      title: 'Property Headaches',
      description: 'Our team handles everything from leasing to repairs and maintenance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroRef}
            className={`text-center transition-all duration-1000 ${
              heroVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
              We Do Real Estate 
              <span className="text-green-400"> Differently</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto hover:text-white transition-colors duration-300">
              BeaconTrust was created to protect clients from the very risks that plague Kenya's 
              property sector. Our approach is simple: eliminate fraud, streamline processes, 
              and make real estate stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* What We Protect You From */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
              What We Protect You From
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300">
              We've identified the common pitfalls in Kenya's real estate market and built our 
              services to protect you from every single one.
            </p>
          </div>
          
          <div 
            ref={protectionsRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              protectionsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {protections.map((protection, index) => {
              const IconComponent = protection.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-red-600 group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{protection.title}</h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{protection.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={approachRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              approachVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-30px]'
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
                Our Proven Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Thorough Verification</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Every property undergoes comprehensive due diligence through official channels.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Complete Transparency</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">You're informed at every step with full documentation and clear communication.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Professional Network</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">We work with vetted lawyers, valuers, and financial institutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Ongoing Support</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Our relationship doesn't end at purchase - we provide continuous support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition-all duration-500 group">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Promise</h3>
                <p className="text-lg text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  "We treat every transaction as if it were our own investment, ensuring the same level 
                  of care and diligence we'd want for ourselves."
                </p>
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group-hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:animate-bounce">100%</div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-20 bg-blue-900 text-white transition-all duration-1000 ${
          ctaVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
            Ready for a Different Real Estate Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100 hover:text-white transition-colors duration-300">
            Talk to a specialist today and discover how we can protect your investment.
          </p>
          <Link
            to="/quote"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25 inline-flex items-center group"
          >
            Talk to a Specialist
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyBeaconTrust;
