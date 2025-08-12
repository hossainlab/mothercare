'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, CalendarCheck, Home, FileText, MessageCircle } from 'lucide-react';

const ProgressSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account in minutes',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: CalendarCheck,
      title: 'Book a Visit',
      description: 'Choose your preferred date & time',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Home,
      title: 'Home Visit',
      description: 'Our expert visits your home',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: FileText,
      title: 'AI Report',
      description: 'Get instant AI-generated results',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Support',
      description: '24/7 WhatsApp assistance',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('progress-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  const progressWidth = ((currentStep + 1) / steps.length) * 100;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          id="progress-section"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Service Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive 5-step process for professional ultrasound care at home
          </p>
        </motion.div>

        {/* Mobile Progress Steps */}
        <div className="block md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${
                    isActive
                      ? `${step.bgColor} border-2 border-${step.iconColor.split('-')[1]}-200 shadow-lg scale-105`
                      : isCompleted
                      ? 'bg-gray-100 border-2 border-gray-200'
                      : 'bg-white border-2 border-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                          : isCompleted
                          ? 'bg-gray-400 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${isActive ? step.iconColor : 'text-gray-700'}`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop Progress Steps */}
        <div className="hidden md:block">
          <motion.div
            className="relative max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-pink-500 to-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressWidth}%` }}
                transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
              />
            </div>

            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <motion.div
                    key={index}
                    className="text-center cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setCurrentStep(index)}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`relative w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-r ${step.color} shadow-xl scale-110`
                          : isCompleted
                          ? 'bg-gray-400 shadow-md'
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      whileHover={!isActive ? { scale: 1.1 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-12 h-12 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                      
                      {/* Pulse Animation for Active Step */}
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Step Content */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${index}-${isActive}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3
                          className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                            isActive ? step.iconColor : 'text-gray-700'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-gray-700' : 'text-gray-500'
                          }`}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Step Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex items-center justify-center space-x-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center shadow-lg`}>
                  {React.createElement(steps[currentStep].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Step {currentStep + 1}: {steps[currentStep].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {steps[currentStep].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <motion.div
          className="flex justify-center mt-12 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? `bg-gradient-to-r ${step.color} shadow-lg`
                  : index < currentStep
                  ? 'bg-gray-400'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setCurrentStep(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Mobile App Booking Section */}
      <motion.div
        className="mt-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-45"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Book Your Appointment via <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mobile App</span>
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Experience seamless appointment booking with our user-friendly mobile application designed for expecting mothers
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Mobile App Mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gradient-to-br from-blue-500 to-purple-600 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-white text-sm mb-6">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="text-center mb-8">
                      <h4 className="text-white text-2xl font-bold mb-2">Matriseba</h4>
                      <p className="text-blue-100 text-sm">Home Ultrasound Service</p>
                    </div>

                    {/* Booking Form Preview */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 space-y-4 flex-1">
                      <h5 className="text-gray-900 font-semibold text-lg mb-4">Book Your Visit</h5>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Full Name</div>
                          <div className="text-gray-900">Sarah Ahmed</div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Phone Number</div>
                          <div className="text-gray-900">+880 1XXX-XXXXXX</div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Preferred Date</div>
                          <div className="text-gray-900">Tomorrow, 2:00 PM</div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 text-center">
                          <span className="text-white font-medium">Confirm Appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Easy Booking</p>
                    <p className="text-xs text-gray-600">3 min setup</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">24/7 Available</p>
                    <p className="text-xs text-gray-600">Book anytime</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Steps */}
          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Download App",
                description: "Download Matriseba app from Google Play Store or App Store for free",
                icon: "📱",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Create Profile",
                description: "Register with your phone number and complete your medical profile quickly",
                icon: "👤",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "03",
                title: "Select Service",
                description: "Choose home ultrasound service and pick your preferred date and time",
                icon: "📅",
                color: "from-pink-500 to-pink-600"
              },
              {
                step: "04",
                title: "Confirm & Pay",
                description: "Review booking details, make secure payment, and receive instant confirmation",
                icon: "💳",
                color: "from-green-500 to-green-600"
              },
              {
                step: "05",
                title: "Track Visit",
                description: "Get real-time updates, track your health agent, and receive notifications",
                icon: "📍",
                color: "from-orange-500 to-orange-600"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="flex items-start space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {step.step}
                </div>
                <div className="flex items-center space-x-3 flex-1">
                  <div className="text-2xl">{step.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* App Download CTA */}
        <motion.div 
          className="text-center mt-16 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Download on the</p>
                  <p className="text-lg font-bold text-gray-900">Google Play Store</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🍎</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Download on the</p>
                  <p className="text-lg font-bold text-gray-900">App Store</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-6 text-lg">
            Join <span className="font-semibold text-blue-600">15,000+</span> happy mothers using our mobile app
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProgressSteps;