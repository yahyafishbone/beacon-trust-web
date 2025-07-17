
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Zap, Globe, Building, Users, Star, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Land & Legal Support',
      description: 'Title verification, transfers, change of user, and comprehensive legal processing.'
    },
    {
      icon: Building,
      title: 'Sales & Marketing',
      description: 'Property branding, staging, buyer onboarding, and complete sales support.'
    },
    {
      icon: Eye,
      title: 'Planning & Development',
      description: 'Design, approvals, construction supervision, and project management.'
    },
    {
      icon: Users,
      title: 'Property Management',
      description: 'End-to-end leasing, repairs, rent collection, and detailed reporting.'
    }
  ];

  const whyChooseUs = [
    '100% Verified Land with Full Due Diligence',
    'No Hidden Fees or Middlemen',
    'Fast, Transparent Legal Processing',
    'Support for Diaspora Investors',
    'Linkages to Trusted Financial Institutions',
    'Professional Property Management'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Hero />

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your One-Stop Real Estate Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From land sourcing and legal due diligence to project approvals and professional property management — 
              BeaconTrust provides trusted, efficient, and fully transparent real estate solutions. Whether you're 
              buying your first plot, investing from abroad, or managing a large estate, we make the journey seamless and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Why BeaconTrust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/why-beacontrust"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">500+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">100%</div>
                    <div className="text-gray-600">Verified Land</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Hear from Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">
                "BeaconTrust helped me acquire land from abroad without a single issue. Transparent, efficient, and reliable!"
              </p>
              <div className="font-semibold">— James Otieno</div>
              <div className="text-blue-200">Diaspora Investor (USA)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">
                "Their property management service is exceptional. I never worry about my rental properties anymore."
              </p>
              <div className="font-semibold">— Mary Wanjiku</div>
              <div className="text-blue-200">Property Investor</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">
                "Fast, professional, and honest. BeaconTrust made our first land purchase stress-free."
              </p>
              <div className="font-semibold">— David Kimani</div>
              <div className="text-blue-200">First-time Buyer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Make Your Real Estate Journey Safer
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Ready to experience transparent, secure, and professional real estate services? 
            Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book a Free Consultation
              <Phone className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/quote"
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
