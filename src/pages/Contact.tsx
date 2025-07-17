
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    'Land & Legal Support',
    'Sales & Marketing',
    'Planning & Development',
    'Property Management',
    'Financial Linkages',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We're Here to 
              <span className="text-green-400"> Help</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Get in touch with our real estate experts. We're ready to answer your questions 
              and help you navigate your property journey with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to start your real estate journey? Contact us today for a free consultation 
                  and discover how we can help you achieve your property goals.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+254 721 744 035</p>
                    <p className="text-sm text-gray-500">Available Monday - Friday, 8AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@beacontrust.co.ke</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Location</h3>
                    <div className="text-gray-600">
                      <p>Evangelical Lutheran Church in Kenya,</p>
                      <p>Off Ondiek Highway</p>
                      <p>P.O. Box 19441 - 40123 KSM</p>
                      <p>Kisumu, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Kisumu, we're easily accessible for in-person consultations.
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
