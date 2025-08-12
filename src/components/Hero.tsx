'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Shield, Home, Bot } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: { 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" as const,
      repeatType: "loop" as const
    },
  };

  const features = [
    { icon: Shield, text: '100% Safe', color: 'text-green-500' },
    { icon: Home, text: 'Home Service', color: 'text-blue-500' },
    { icon: Bot, text: 'AI-Powered', color: 'text-purple-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
      <div className="absolute bottom-40 left-4 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[75vh] sm:min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <span className="block sm:inline">Ultrasound at Home –{' '}</span>
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent block sm:inline">
                Safer Pregnancy
              </span>{' '}
              <span className="block sm:inline">Begins with MotherCare</span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Get AI-powered ultrasound scans done from the comfort of your home
            </motion.p>

            <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
              <Link
                href="#book"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base sm:text-lg rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Book Your Time
              </Link>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-1.5 sm:space-x-2 bg-white/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative order-first lg:order-last" variants={itemVariants}>
            <motion.div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional with portable ultrasound device"
                width={600}
                height={400}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEDEQA/AJvj4qNLjg2Zy4m89fXkn4c7xf3Fq8j6Gk2C1LRnGD0f7Uh2l7tgXNKLQ=="
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-xl shadow-lg border border-white/20"
              animate={floatingAnimation}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">BabyChecker AI</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Real-time Analysis</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements - Static for performance */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-12 md:pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { number: '10,000+', label: 'Happy Mothers', color: 'text-blue-600' },
            { number: '99.9%', label: 'Accuracy Rate', color: 'text-green-600' },
            { number: '24/7', label: 'Support', color: 'text-purple-600' },
            { number: '15+', label: 'Cities Covered', color: 'text-pink-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                {stat.number}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;