
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { User, Building2, TrendingUp, Scale, Home, Globe, Users, Church } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { useSEO } from '../hooks/useSEO';

const ClientSegments = () => {
  useSEO({
    title: 'Client Segments',
    description: 'BeaconTrust serves diverse clients - individual buyers, investors, diaspora, corporations, and institutions. Tailored real estate solutions for every segment.',
    keywords: 'real estate clients Kenya, diaspora property investment, corporate real estate, individual buyers, property investors, institutional clients'
  });

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: segmentsRef, isVisible: segmentsVisible } = useScrollAnimation();
  const { elementRef: specialRef, isVisible: specialVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const segments = [
    {
      icon: User,
      title: 'Individual Buyers',
      description: 'Personal property purchases and investments',
      clients: [
        'First-time land/home buyers',
        'Diaspora investors',
        'Retirees planning for the future',
        'Young professionals entering the market'
      ],
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'Institutions & Groups',
      description: 'Organizational property acquisitions',
      clients: [
        'SACCOs and Chamas',
        'Churches and NGOs',
        'Government agencies',
        'Educational institutions'
      ],
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Investors & Developers',
      description: 'Commercial and development projects',
      clients: [
        'Buy-to-let investors',
        'Land speculators',
        'Agribusiness ventures',
        'Real estate developers'
      ],
      color: 'purple'
    },
    {
      icon: Scale,
      title: 'Legal & Financial Partners',
      description: 'Professional service collaborations',
      clients: [
        'Law firms requiring property services',
        'Banks and financial institutions',
        'Property valuers and surveyors',
        'Insurance companies'
      ],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
              Tailored Services for 
              <span className="text-green-400"> Every Type of Client</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto hover:text-white transition-colors duration-300">
              Whether you're an individual buyer, institution, investor, or professional partner, 
              we have specialized solutions designed for your unique needs and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={segmentsRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${
              segmentsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:scale-105 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(segment.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 group-hover:animate-bounce" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{segment.title}</h3>
                      <p className="text-gray-600">{segment.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {segment.clients.map((client, clientIndex) => (
                      <li key={clientIndex} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${clientIndex * 50}ms` }}>
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Focus Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={specialRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
              specialVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-30px]'
            }`}
          >
            {/* Diaspora Investors */}
            <div className="bg-blue-50 rounded-2xl p-8 hover:bg-blue-100 transition-all duration-500 hover:shadow-lg hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3 group-hover:animate-spin transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">Diaspora Investors</h3>
              </div>
              <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                Special support for Kenyans living abroad who want to invest back home safely and securely.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:translate-x-2 transition-transform duration-300">• Remote property verification and documentation</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>• Regular progress updates with photos and reports</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>• Secure payment processing and escrow services</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '150ms' }}>• Legal compliance for international transactions</li>
              </ul>
            </div>

            {/* First-Time Buyers */}
            <div className="bg-green-50 rounded-2xl p-8 hover:bg-green-100 transition-all duration-500 hover:shadow-lg hover:scale-105 group">
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-green-600 mr-3 group-hover:animate-bounce transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">First-Time Buyers</h3>
              </div>
              <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                Comprehensive guidance for those entering the real estate market for the first time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:translate-x-2 transition-transform duration-300">• Education on the buying process</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>• Budget planning and financing options</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>• Market insights and location advice</li>
                <li className="hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '150ms' }}>• Step-by-step transaction support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Success Across All Segments</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
              Our diverse client base reflects our ability to deliver results for every type of real estate need.
            </p>
          </div>
          <div 
            ref={statsRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              statsVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-110 group cursor-pointer">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:animate-bounce">95%</div>
              <div className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Diaspora Clients</div>
              <div className="text-gray-300 text-sm">Successfully completed transactions remotely</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-110 group cursor-pointer">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:animate-bounce">200+</div>
              <div className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Individual Buyers</div>
              <div className="text-gray-300 text-sm">Helped achieve their property dreams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-110 group cursor-pointer">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:animate-bounce">50+</div>
              <div className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Institutions</div>
              <div className="text-gray-300 text-sm">Served with specialized solutions</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientSegments;
