import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Heart, Users, Award, Calendar, ChevronRight, Menu, X, Star, Play } from 'lucide-react';

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic and treatment options."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and critical care."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Surgery",
      description: "Advanced surgical procedures with minimally invasive techniques."
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Expert Doctors" },
    { number: "1000+", label: "Happy Patients" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent care and professional staff. The doctors were very thorough and caring.",
      image: "👩‍💼"
    },
    {
      name: "Michael Brown",
      rating: 5,
      text: "Outstanding medical services. The facility is modern and the staff is incredibly helpful.",
      image: "👨‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@rbcare.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-600">
                RB<span className="text-red-500">+</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Doctors</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-tr from-amber-400 to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Book Appointment
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Doctors</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-tl from-blue-400 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Your Health is Our 
                <span className="text-yellow-400"> Priority</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Providing exceptional healthcare services with compassionate care, 
                advanced technology, and expert medical professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-tl from-amber-400 to-pink-700  hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Appointment</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-blue-400 text-black border border-gray-500 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-blue-400 text-black border border-gray-500 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-black border border-gray-500 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option className="text-gray-800">Select Department</option>
                    <option className="text-gray-800">Cardiology</option>
                    <option className="text-gray-800">Emergency</option>
                    <option className="text-gray-800">Surgery</option>
                  </select>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 py-3 rounded-lg font-semibold transition-colors">
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare services with state-of-the-art facilities 
              and experienced medical professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 group hover:border-blue-200">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Why Choose MediCare+ Hospital?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 25 years of excellence in healthcare, we combine cutting-edge 
                technology with compassionate care to provide the best medical services 
                for our patients and their families.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 Emergency Care Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert Medical Professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">State-of-the-art Medical Equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Comprehensive Health Packages</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Patient Testimonials</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{testimonial.image}</span>
                      <div>
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health 
            with our experienced medical team.
          </p>
          <button className="bg-gradient-to-tl from-amber-400 to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">
                RB<span className="text-red-500">+</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing exceptional healthcare services with compassionate care and 
                advanced medical technology.
              </p>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Medical Center Dr, Health City, HC 12345</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find a Doctor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patient Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Surgery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@medicare.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare+ Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}