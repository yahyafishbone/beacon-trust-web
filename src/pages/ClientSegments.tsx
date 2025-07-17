
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { User, Building2, TrendingUp, Scale, Home, Globe, Users, Church } from 'lucide-react';

const ClientSegments = () => {
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Tailored Services for 
              <span className="text-green-400"> Every Type of Client</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Whether you're an individual buyer, institution, investor, or professional partner, 
              we have specialized solutions designed for your unique needs and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(segment.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{segment.title}</h3>
                      <p className="text-gray-600">{segment.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {segment.clients.map((client, clientIndex) => (
                      <li key={clientIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{client}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Diaspora Investors */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Diaspora Investors</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Special support for Kenyans living abroad who want to invest back home safely and securely.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Remote property verification and documentation</li>
                <li>• Regular progress updates with photos and reports</li>
                <li>• Secure payment processing and escrow services</li>
                <li>• Legal compliance for international transactions</li>
              </ul>
            </div>

            {/* First-Time Buyers */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Home className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">First-Time Buyers</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Comprehensive guidance for those entering the real estate market for the first time.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Education on the buying process</li>
                <li>• Budget planning and financing options</li>
                <li>• Market insights and location advice</li>
                <li>• Step-by-step transaction support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Across All Segments</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse client base reflects our ability to deliver results for every type of real estate need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white font-semibold mb-2">Diaspora Clients</div>
              <div className="text-gray-300 text-sm">Successfully completed transactions remotely</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-white font-semibold mb-2">Individual Buyers</div>
              <div className="text-gray-300 text-sm">Helped achieve their property dreams</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Institutions</div>
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
