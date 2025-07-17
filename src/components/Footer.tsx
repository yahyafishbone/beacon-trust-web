
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-400">BeaconTrust</h3>
            <p className="text-gray-300">
              Trusted Real Estate Solutions – Transparent, Secure, End-to-End Property Services in Kenya
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link>
              <Link to="/why-beacontrust" className="text-gray-300 hover:text-green-400 transition-colors">Why BeaconTrust</Link>
              <Link to="/client-segments" className="text-gray-300 hover:text-green-400 transition-colors">Client Segments</Link>
              <Link to="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-300">Land & Legal Support</span>
              <span className="text-gray-300">Sales & Marketing</span>
              <span className="text-gray-300">Planning & Development</span>
              <span className="text-gray-300">Property Management</span>
              <span className="text-gray-300">Financial Linkages</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+254 721 744 035</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">contact@beacontrust.co.ke</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <div className="text-gray-300">
                  <p>Evangelical Lutheran Church in Kenya,</p>
                  <p>Off Ondiek Highway</p>
                  <p>P.O. Box 19441 - 40123 KSM</p>
                  <p>Kisumu, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BeaconTrust. All rights reserved. | Integrity You Can Stand On.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
