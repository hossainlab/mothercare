'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'How It Works', href: '#services' },
        { label: 'BabyChecker', href: '#about' },
        { label: 'Book Appointment', href: '#book' },
        { label: 'AI Reports', href: '#about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'WhatsApp', href: 'https://wa.me/8801XXXXXXXXX', external: true },
        { label: 'Emergency Support', href: 'tel:+8801XXXXXXXXX', external: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Mission', href: '#about' },
        { label: 'Careers', href: '#' },
        { label: 'News', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C23.97 5.367 18.637.029 12.017.029zM15.99 17.989h-7.982V9.996h7.982v7.993zm-3.991-9.591c-1.099 0-1.988.889-1.988 1.988s.889 1.988 1.988 1.988 1.988-.889 1.988-1.988-.889-1.988-1.988-1.988zm5.979-2.397h-1.589c-.198 0-.359.161-.359.359v1.589c0 .198.161.359.359.359h1.589c.198 0 .359-.161.359-.359V6.36c0-.198-.161-.359-.359-.359z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MotherCare</h3>
                    <p className="text-sm text-gray-400 font-medium">মাতৃসেবা</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Safer pregnancy begins with better care. We bring professional healthcare 
                  to your doorstep with AI-powered ultrasound technology.
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-xl p-4">
                  <p className="text-blue-200 text-sm font-medium">
                    🏆 Trusted by 15,000+ expecting mothers across Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">
                Get the latest news about maternal healthcare and our services
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <p>&copy; 2025 DeepBio Limited. All rights reserved.</p>
              <span>|</span>
              <p className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for expecting mothers</span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Medical Disclaimer
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Cookies Policy
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact Banner */}
        <motion.div
          className="py-4 border-t border-gray-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-red-600/10 border border-red-600/20 rounded-lg p-4 text-center">
            <p className="text-red-300 font-medium">
              🚨 For medical emergencies, please contact your nearest hospital or call 
              <a href="tel:999" className="text-red-200 hover:text-white font-bold ml-2 underline">
                Emergency: 999
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;