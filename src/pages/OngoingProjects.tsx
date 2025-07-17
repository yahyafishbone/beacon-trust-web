
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { MapPin, Bed, Bath, Square, Calendar, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const OngoingProjects = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Beacon Heights Residential",
      location: "Kisumu East, Kenya",
      type: "Residential Development",
      status: "Under Construction",
      completion: "December 2024",
      units: 24,
      bedrooms: "2-4",
      bathrooms: "2-3",
      area: "120-200 sqm",
      price: "From KSh 4.5M",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      description: "Modern residential apartments with stunning lake views and premium amenities.",
      features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden"]
    },
    {
      id: 2,
      title: "Lakeside Commercial Plaza",
      location: "Milimani, Kisumu",
      type: "Commercial Development",
      status: "Planning Phase",
      completion: "June 2025",
      units: 12,
      area: "50-150 sqm",
      price: "From KSh 8M",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      description: "Prime commercial spaces perfect for retail and office use in the heart of Kisumu.",
      features: ["Prime Location", "High Foot Traffic", "Modern Design", "Ample Parking"]
    },
    {
      id: 3,
      title: "Garden View Townhouses",
      location: "Nyamasaria, Kisumu",
      type: "Townhouse Development",
      status: "Available Now",
      completion: "Completed",
      units: 8,
      bedrooms: "3-4",
      bathrooms: "3-4",
      area: "180-250 sqm",
      price: "From KSh 6.2M",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      description: "Spacious townhouses with private gardens and modern finishes.",
      features: ["Private Garden", "Garage", "Modern Kitchen", "Master En-suite"]
    },
    {
      id: 4,
      title: "Sunset Ridge Apartments",
      location: "Tom Mboya Estate, Kisumu",
      type: "Apartment Complex",
      status: "Under Construction",
      completion: "March 2025",
      units: 36,
      bedrooms: "1-3",
      bathrooms: "1-2",
      area: "65-140 sqm",
      price: "From KSh 2.8M",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
      description: "Affordable modern apartments with excellent connectivity to the city center.",
      features: ["Affordable Housing", "Good Transport Links", "Community Center", "Playground"]
    },
    {
      id: 5,
      title: "Executive Villas Phase II",
      location: "Riat Hills, Kisumu",
      type: "Villa Development",
      status: "Pre-Launch",
      completion: "September 2025",
      units: 6,
      bedrooms: "4-5",
      bathrooms: "4-5",
      area: "300-400 sqm",
      price: "From KSh 12M",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
      description: "Luxury villas with panoramic views and premium specifications.",
      features: ["Panoramic Views", "Luxury Finishes", "Large Compound", "Staff Quarters"]
    },
    {
      id: 6,
      title: "Central Business Suites",
      location: "CBD, Kisumu",
      type: "Office Development",
      status: "Under Construction",
      completion: "August 2024",
      units: 20,
      area: "40-120 sqm",
      price: "From KSh 5.5M",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
      description: "Modern office suites in the central business district with premium amenities.",
      features: ["CBD Location", "High-Speed Internet", "Conference Facilities", "Reception Services"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available Now":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Under Construction":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Planning Phase":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Pre-Launch":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white py-20 transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ongoing Projects & Properties
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our current developments and available properties across Kisumu. 
            From residential apartments to commercial spaces, find your perfect investment opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                6 Active Projects
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                130+ Units Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section 
        ref={projectsRef}
        className={`py-16 transition-all duration-1000 delay-300 ${
          projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${getStatusColor(project.status)} transition-colors duration-200`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-blue-900 hover:text-green-600 transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Completion:</span>
                      </div>
                      <span className="text-gray-600">{project.completion}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Square className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Units:</span>
                      </div>
                      <span className="text-gray-600">{project.units}</span>
                    </div>

                    {project.bedrooms && (
                      <>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Bed className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">Bedrooms:</span>
                          </div>
                          <span className="text-gray-600">{project.bedrooms}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Bath className="h-4 w-4 text-green-600" />
                            <span className="font-medium">Bathrooms:</span>
                          </div>
                          <span className="text-gray-600">{project.bathrooms}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-green-600">{project.price}</span>
                      <span className="text-sm text-gray-500">{project.area}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs hover:bg-blue-50 transition-colors duration-200">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1 bg-blue-900 hover:bg-blue-800 transition-colors duration-200"
                        size="sm"
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all duration-200"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Invest in Your Future?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with our property experts to learn more about these exciting projects 
            and find the perfect property that matches your investment goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform"
            >
              Schedule a Site Visit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-blue-900 hover:text-white transition-all duration-200 hover:scale-105 transform"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OngoingProjects;
