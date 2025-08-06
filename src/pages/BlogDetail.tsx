import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  User,
  Tag,
  BookOpen,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const BlogDetail = () => {
  const { slug } = useParams();
  const heroAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  // Mock blog data - in real app this would come from API/database
  const blogData = {
    'how-to-verify-land-in-kenya': {
      title: 'How to Verify Land in Kenya: A Comprehensive Guide',
      slug: 'how-to-verify-land-in-kenya',
      excerpt: 'A comprehensive guide to conducting proper due diligence on land purchases in Kenya, including official registry checks and documentation requirements.',
      content: `
        <h2>Introduction</h2>
        <p>Purchasing land in Kenya requires careful verification to avoid fraud and legal complications. This comprehensive guide will walk you through the essential steps to verify land ownership and ensure a secure transaction.</p>
        
        <h2>1. Official Search at the Land Registry</h2>
        <p>The first and most crucial step is conducting an official search at the relevant Land Registry office. This involves:</p>
        <ul>
          <li>Obtaining a copy of the title deed</li>
          <li>Verifying the current registered owner</li>
          <li>Checking for any encumbrances or charges</li>
          <li>Confirming the exact location and size of the plot</li>
        </ul>
        
        <h2>2. Site Visit and Physical Verification</h2>
        <p>Always visit the actual site to verify:</p>
        <ul>
          <li>Physical boundaries match the title deed</li>
          <li>No disputes with neighbors</li>
          <li>Accessibility and infrastructure</li>
          <li>Zoning compliance</li>
        </ul>
        
        <h2>3. Required Documentation</h2>
        <p>Ensure all necessary documents are authentic:</p>
        <ul>
          <li>Original title deed</li>
          <li>Land rates payment receipts</li>
          <li>Survey plans</li>
          <li>Environmental Impact Assessment (if required)</li>
        </ul>
        
        <h2>4. Legal Due Diligence</h2>
        <p>Engage a qualified lawyer to:</p>
        <ul>
          <li>Review all documentation</li>
          <li>Conduct comprehensive searches</li>
          <li>Prepare purchase agreements</li>
          <li>Handle the transfer process</li>
        </ul>
        
        <h2>5. Red Flags to Watch Out For</h2>
        <p>Be cautious of these warning signs:</p>
        <ul>
          <li>Pressure to complete quickly</li>
          <li>Unusually low prices</li>
          <li>Reluctance to provide documentation</li>
          <li>Multiple "owners" claiming the same land</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Proper land verification is essential for protecting your investment. Take time to follow these steps and always work with qualified professionals to ensure a secure purchase.</p>
      `,
      category: 'Legal',
      date: '2024-01-15',
      readTime: '8 min read',
      author: 'BeaconTrust Legal Team',
      tags: ['Land Verification', 'Legal Guide', 'Property Purchase', 'Due Diligence'],
      featured: true
    },
    'avoiding-real-estate-scams': {
      title: 'Avoiding Real Estate Scams in Kenya: Red Flags and Protection Tips',
      slug: 'avoiding-real-estate-scams',
      excerpt: 'Learn to identify common red flags and protect yourself from fraudulent property deals with our expert tips and warning signs.',
      content: `
        <h2>Common Real Estate Scams in Kenya</h2>
        <p>Real estate fraud is unfortunately common in Kenya. Understanding the most prevalent scams can help you avoid becoming a victim.</p>
        
        <h2>1. Fake Title Deeds</h2>
        <p>Fraudsters often create convincing fake title deeds. Always verify documents at the official Land Registry.</p>
        
        <h2>2. Double Allocation</h2>
        <p>The same plot may be sold to multiple buyers. Conduct thorough searches before payment.</p>
        
        <h2>3. Non-Existent Properties</h2>
        <p>Some scammers advertise properties that don't exist or aren't theirs to sell.</p>
        
        <h2>Protection Strategies</h2>
        <ul>
          <li>Always use licensed real estate agents</li>
          <li>Verify all documentation independently</li>
          <li>Never pay large sums without proper verification</li>
          <li>Use escrow services for transactions</li>
        </ul>
      `,
      category: 'Buying Tips',
      date: '2024-01-10',
      readTime: '6 min read',
      author: 'Sarah Kimani',
      tags: ['Fraud Prevention', 'Buying Tips', 'Safety'],
      featured: true
    }
  };

  const article = blogData[slug as keyof typeof blogData];
  
  // Related articles
  const relatedArticles = Object.values(blogData).filter(
    post => post.slug !== slug && post.category === article?.category
  ).slice(0, 2);

  useSEO({
    title: article ? article.title : 'Article Not Found',
    description: article ? article.excerpt : 'Article not available',
    keywords: article ? article.tags.join(', ') : ''
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            ref={heroAnimation.elementRef}
            className={`animate-on-scroll ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <Badge className={`mb-4 ${
              article.category === 'Legal' ? 'bg-blue-100 text-blue-800' :
              article.category === 'Buying Tips' ? 'bg-green-100 text-green-800' :
              article.category === 'Diaspora' ? 'bg-purple-100 text-purple-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {article.category}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div 
              ref={contentAnimation.elementRef}
              className={`animate-on-scroll ${contentAnimation.isVisible ? 'visible' : ''}`}
            >
              {/* Social Share */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="article-content"
                />
              </div>

              {/* Article Footer */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Like Article
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Comment
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-sm text-gray-600">Real Estate Expert</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Experienced real estate professional with deep knowledge of the Kenyan property market.
                </p>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Quick Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2 text-sm">
                  <a href="#introduction" className="block text-blue-600 hover:text-blue-700">
                    Introduction
                  </a>
                  <a href="#official-search" className="block text-blue-600 hover:text-blue-700">
                    Official Search
                  </a>
                  <a href="#site-visit" className="block text-blue-600 hover:text-blue-700">
                    Site Visit
                  </a>
                  <a href="#documentation" className="block text-blue-600 hover:text-blue-700">
                    Documentation
                  </a>
                  <a href="#legal-diligence" className="block text-blue-600 hover:text-blue-700">
                    Legal Due Diligence
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedArticles.map((related, index) => (
                    <Link 
                      key={index}
                      to={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-600">{related.readTime}</p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="bg-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Professional Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get expert assistance with your property needs.
                </p>
                <Link to="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;