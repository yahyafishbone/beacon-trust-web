
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <div 
        ref={heroRef}
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 transition-all duration-1000 ${
          heroVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hover:scale-105 transition-transform duration-300">
                Integrity You Can 
                <span className="text-green-400 animate-bounce-gentle block sm:inline"> Stand On</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed hover:text-white transition-colors duration-300">
                Trusted Real Estate Solutions – Transparent, Secure, End-to-End Property Services in Kenya
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/quote"
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/25 inline-flex items-center justify-center group"
              >
                <span className="hidden sm:inline">Book a Free Consultation</span>
                <span className="sm:hidden">Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
              >
                <span className="hidden sm:inline">Explore Our Services</span>
                <span className="sm:hidden">Our Services</span>
              </Link>
            </div>

            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 transition-all duration-1000 delay-300 ${
                statsVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-30px]'
              }`}
            >
              <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2 group-hover:animate-bounce" />
                <div className="text-lg sm:text-2xl font-bold group-hover:text-green-400 transition-colors duration-300">100%</div>
                <div className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">Verified Land</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2 group-hover:animate-bounce" />
                <div className="text-lg sm:text-2xl font-bold group-hover:text-green-400 transition-colors duration-300">500+</div>
                <div className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">Happy Clients</div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-2 group-hover:animate-bounce" />
                <div className="text-lg sm:text-2xl font-bold group-hover:text-green-400 transition-colors duration-300">5+ Years</div>
                <div className="text-xs sm:text-sm text-blue-100 group-hover:text-white transition-colors duration-300">Experience</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold group-hover:text-green-300 transition-colors duration-300">Legal Due Diligence</h3>
                      <p className="text-blue-100 text-xs sm:text-sm">Full title verification & legal processing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold group-hover:text-green-300 transition-colors duration-300">Diaspora Support</h3>
                      <p className="text-blue-100 text-xs sm:text-sm">Remote investment made simple & secure</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold group-hover:text-green-300 transition-colors duration-300">End-to-End Service</h3>
                      <p className="text-blue-100 text-xs sm:text-sm">From acquisition to property management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
