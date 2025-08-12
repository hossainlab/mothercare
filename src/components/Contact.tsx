'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+880 1XXX-XXXXXX',
      description: 'Call us anytime for immediate assistance',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@matriseba.com',
      description: 'Send us your questions or concerns',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Dhaka, Bangladesh',
      description: 'Visit our main office location',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: '24/7 Available',
      description: 'We\'re here whenever you need us',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C23.97 5.367 18.637.029 12.017.029zM15.99 17.989h-7.982V9.996h7.982v7.993zm-3.991-9.591c-1.099 0-1.988.889-1.988 1.988s.889 1.988 1.988 1.988 1.988-.889 1.988-1.988-.889-1.988-1.988-1.988zm5.979-2.397h-1.589c-.198 0-.359.161-.359.359v1.589c0 .198.161.359.359.359h1.589c.198 0 .359-.161.359-.359V6.36c0-.198-.161-.359-.359-.359z"/>
        </svg>
      ),
      color: 'hover:bg-pink-600',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-blue-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help with all your maternal care needs. Reach out to us anytime!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                className={`${contact.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {contact.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {contact.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Experience Healthcare at Home?
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Call Us Directly
                  </h4>
                  <p className="text-gray-600">
                    Speak with our friendly support team for immediate assistance
                  </p>
                  <a 
                    href="tel:+8801XXXXXXXXX" 
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    +880 1XXX-XXXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    WhatsApp Support
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Get instant support and book appointments via WhatsApp
                  </p>
                  <a 
                    href="https://wa.me/8801XXXXXXXXX?text=Hello%2C%20I%20need%20help%20with%20Matriseba%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688z"/>
                    </svg>
                    Chat Now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Send us your questions or feedback
                  </p>
                  <a 
                    href="mailto:info@matriseba.com" 
                    className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200"
                  >
                    info@matriseba.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-200 ${social.color} text-gray-700 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/20 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your First Ultrasound
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Experience the convenience and peace of mind that comes with professional 
                healthcare delivered to your doorstep. Join thousands of satisfied mothers 
                across Bangladesh.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '✓ Professional health agents',
                  '✓ AI-powered accurate results',
                  '✓ Safe and comfortable experience',
                  '✓ 24/7 support available',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <span className="text-green-300 font-semibold">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#book"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Your Appointment
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;