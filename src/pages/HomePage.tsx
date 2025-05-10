
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-rehabilitation-light">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-rehabilitation-accent">MWANGAZA</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-800 hover:text-rehabilitation-button">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800 hover:text-rehabilitation-button">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-800 hover:text-rehabilitation-button">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-rehabilitation-button">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link to="/login">
            <Button variant="default">Login</Button>
          </Link>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-rehabilitation-purple mb-6">
                  Mwangaza Rehabilitation Center
                </h1>
                <p className="text-xl mb-8 text-gray-700">
                  Empowering recovery through comprehensive care and support.
                  Our client management system streamlines rehabilitation services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login">
                    <Button className="bg-rehabilitation-button hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                      Login to System
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline" className="px-8 py-3 rounded-md">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                  alt="Rehabilitation Services" 
                  className="rounded-lg shadow-xl max-w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-rehabilitation-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Social Work Department</h3>
                <p className="text-gray-700">
                  Providing social support, family counseling, and community reintegration assistance to clients.
                </p>
              </div>
              <div className="bg-rehabilitation-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Psychology Department</h3>
                <p className="text-gray-700">
                  Offering psychological assessments, therapy sessions, and mental health support.
                </p>
              </div>
              <div className="bg-rehabilitation-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Education Department</h3>
                <p className="text-gray-700">
                  Facilitating academic learning, skill development, and educational activities for clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-rehabilitation-purple text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mwangaza Rehabilitation Center</h3>
              <p>Empowering lives through comprehensive rehabilitation services.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/services" className="hover:underline">Services</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <address className="not-italic">
                123 Rehabilitation Road<br />
                Nairobi, Kenya<br />
                Phone: (123) 456-7890<br />
                Email: info@mwangaza.org
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Mwangaza Rehabilitation Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
