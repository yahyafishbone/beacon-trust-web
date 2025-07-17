
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How to Verify Land in Kenya',
      excerpt: 'A comprehensive guide to conducting proper due diligence on land purchases in Kenya, including official registry checks and documentation requirements.',
      category: 'Legal',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Avoiding Real Estate Scams',
      excerpt: 'Learn to identify common red flags and protect yourself from fraudulent property deals with our expert tips and warning signs.',
      category: 'Buying Tips',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: true
    },
    {
      title: 'Top Mistakes Diaspora Buyers Make',
      excerpt: 'Common pitfalls that overseas Kenyans encounter when investing in local real estate and how to avoid them.',
      category: 'Diaspora',
      date: '2024-01-08',
      readTime: '10 min read',
      featured: true
    },
    {
      title: 'Land Use Zoning in Kenya Explained',
      excerpt: 'Understanding different land classifications and their implications for your property investment decisions.',
      category: 'Legal',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false
    },
    {
      title: 'Property Management Best Practices',
      excerpt: 'Essential strategies for maintaining and maximizing returns from your real estate investments.',
      category: 'Management',
      date: '2024-01-03',
      readTime: '9 min read',
      featured: false
    },
    {
      title: 'Understanding Title Deeds in Kenya',
      excerpt: 'A detailed breakdown of different types of title deeds and what they mean for property ownership.',
      category: 'Legal',
      date: '2024-01-01',
      readTime: '12 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Legal', 'Buying Tips', 'Diaspora', 'Management'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Legal': 'bg-blue-100 text-blue-800',
      'Buying Tips': 'bg-green-100 text-green-800',
      'Diaspora': 'bg-purple-100 text-purple-800',
      'Management': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights & Advice from 
              <span className="text-green-400"> the Experts</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Stay informed with the latest real estate insights, legal updates, and practical 
              advice to make smarter property investment decisions in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Link 
                      to="#"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Link 
                    to="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Personalized Advice?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experts are here to help with your specific real estate questions and challenges.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Talk to an Advisor
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
