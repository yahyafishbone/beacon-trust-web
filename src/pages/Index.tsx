
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Eye, Zap, Globe, Building, Users, Star, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useSEO } from '../hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Home',
    description: 'BeaconTrust provides transparent, secure, end-to-end property services in Kenya. Land verification, legal processing, property management, and more.',
    keywords: 'real estate Kenya, property management, land verification, property investment, Kisumu real estate, Kenya property services'
  });

  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { elementRef: whyChooseRef, isVisible: whyChooseVisible } = useScrollAnimation();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

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
      <section 
        ref={servicesRef}
        className={`py-12 sm:py-16 lg:py-20 bg-gray-50 transition-all duration-1000 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your One-Stop Real Estate Partner
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From land sourcing and legal due diligence to project approvals and professional property management — 
              BeaconTrust provides trusted, efficient, and fully transparent real estate solutions. Whether you're 
              buying your first plot, investing from abroad, or managing a large estate, we make the journey seamless and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Why BeaconTrust Section */}
      <section 
        ref={whyChooseRef}
        className={`py-12 sm:py-16 lg:py-20 bg-white transition-all duration-1000 ${
          whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Why Choose Us?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 hover:rounded-lg hover:p-3 hover:shadow-sm group">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:text-green-700" />
                    <span className="text-base sm:text-lg text-gray-700 transition-colors duration-300 group-hover:text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <Link
                  to="/why-beacontrust"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg transition-all duration-300 hover:translate-x-2 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-blue-100 hover:to-green-100">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">500+</div>
                    <div className="text-sm sm:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Happy Clients</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">100%</div>
                    <div className="text-sm sm:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Verified Land</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">5+</div>
                    <div className="text-sm sm:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Years Experience</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-900 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">24/7</div>
                    <div className="text-sm sm:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Explore Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-100 hover-scale group ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-700">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-gray-800">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className={`py-12 sm:py-16 lg:py-20 bg-blue-900 text-white transition-all duration-1000 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Hear from Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 transition-all duration-700 hover-scale ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                "BeaconTrust helped me acquire land from abroad without a single issue. Transparent, efficient, and reliable!"
              </p>
              <div className="font-semibold text-sm sm:text-base">— James Otieno</div>
              <div className="text-blue-200 text-xs sm:text-sm">Diaspora Investor (USA)</div>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 transition-all duration-700 hover-scale ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                "Their property management service is exceptional. I never worry about my rental properties anymore."
              </p>
              <div className="font-semibold text-sm sm:text-base">— Mary Wanjiku</div>
              <div className="text-blue-200 text-xs sm:text-sm">Property Investor</div>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 md:col-span-2 lg:col-span-1 transition-all duration-700 hover-scale ${
              testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">
                "Fast, professional, and honest. BeaconTrust made our first land purchase stress-free."
              </p>
              <div className="font-semibold text-sm sm:text-base">— David Kimani</div>
              <div className="text-blue-200 text-xs sm:text-sm">First-time Buyer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        ref={ctaRef}
        className={`py-12 sm:py-16 lg:py-20 bg-green-600 text-white transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Let's Make Your Real Estate Journey Safer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-green-100">
            Ready to experience transparent, secure, and professional real estate services? 
            Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg group"
            >
              <span className="hidden sm:inline">Book a Free Consultation</span>
              <span className="sm:hidden">Free Consultation</span>
              <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover:scale-110" />
            </Link>
            <Link
              to="/quote"
              className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg"
            >
              <span className="hidden sm:inline">Get a Custom Quote</span>
              <span className="sm:hidden">Get Quote</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
