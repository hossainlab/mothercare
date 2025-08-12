'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rashida Ahmed',
      location: 'Dhaka',
      rating: 5,
      text: 'The convenience of having an ultrasound at home was amazing. The health agent was professional and the AI report was very detailed. I felt completely comfortable throughout the process.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Fatima Begum',
      location: 'Chittagong',
      rating: 5,
      text: 'BabyChecker technology is incredible. I got my results immediately and the WhatsApp support team answered all my questions. Highly recommend this service!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Nasreen Khan',
      location: 'Sylhet',
      rating: 5,
      text: 'Safe, comfortable, and professional service. The AI analysis was spot-on and matched perfectly with my doctor\'s assessment. I highly recommend Matriseba for all expecting mothers.',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Salma Rahman',
      location: 'Rajshahi',
      rating: 5,
      text: 'Excellent service from start to finish. The booking was easy, the health agent was punctual, and the AI report was comprehensive. This is the future of healthcare!',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of expecting mothers across Bangladesh
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500" />
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-200 group-hover:text-blue-200 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join Thousands of Happy Mothers
            </motion.h3>
            
            <motion.p
              className="text-lg md:text-xl mb-12 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Experience the peace of mind that comes with professional healthcare in the comfort of your home
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {[
                { number: '15,000+', label: 'Happy Customers' },
                { number: '25,000+', label: 'Scans Completed' },
                { number: '99.9%', label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-2xl md:text-3xl font-bold mb-2">
                    {stat.number}
                  </h4>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Review Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-900">Excellent</p>
              <p className="text-sm text-gray-600">Based on 2,500+ reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;