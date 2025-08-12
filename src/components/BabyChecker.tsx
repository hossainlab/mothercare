'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Shield, Clock, UserCheck, Zap, Award } from 'lucide-react';
import { memo, useMemo } from 'react';

const BabyChecker = memo(() => {
  // Memoize static data to prevent recreation on every render
  const features = useMemo(() => [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced artificial intelligence provides accurate and reliable ultrasound analysis with 99.9% precision',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Shield,
      title: '100% Safe',
      description: 'Non-invasive, radiation-free technology that\'s completely safe for mother and baby',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get your ultrasound report immediately after the scan is completed - no waiting required',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: UserCheck,
      title: 'Expert Support',
      description: 'Trained healthcare professionals operate the device and explain results in detail',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
    },
  ], []);

  const stats = useMemo(() => [
    { number: '50,000+', label: 'Scans Completed', icon: Award },
    { number: '99.9%', label: 'Accuracy Rate', icon: Zap },
    { number: '24/7', label: 'Expert Support', icon: UserCheck },
  ], []);

  // Simplified animation variants
  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }), []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BabyChecker</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smartphone-based AI ultrasound for maternal health - AI analyses obstetric ultrasound scans to identify risks in pregnancy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            className="relative"
            {...fadeInUp}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern portable ultrasound device for maternal healthcare"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  priority={false}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Static Tech Badges */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">AI Powered</p>
                    <p className="text-xs text-gray-600">Real-time Analysis</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">100% Safe</p>
                    <p className="text-xs text-gray-600">FDA Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            {...fadeInUp}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Revolutionary Healthcare Technology
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                BabyChecker AI analyses obstetric ultrasound scans to identify risks in pregnancy. Scans can be easily acquired with a handheld ultrasound by any frontline health worker within 2 minutes. The system functions offline and requires no prior experience.
              </p>
            </div>

            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="text-xl font-bold text-gray-900">{stat.number}</h4>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          {...fadeInUp}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`${feature.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Showcase */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose BabyChecker?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Making ultrasound accessible worldwide - from community health centres to remote areas where maternal mortality is a critical challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                'Functions Offline',
                'No Prior Experience',
                '2-Minute Scans',
                'Pregnancy Risk Detection',
                'Handheld Device',
                'Global Impact',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* BabyChecker Technology Workflow */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How BabyChecker Works
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ultrasound technology that provides instant analysis with professional guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://delft.care/wp-content/uploads/Verified-Results-1-400x419.png"
                alt="BabyChecker workflow diagram - Source: Delft Care"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                loading="lazy"
                decoding="async"
                width="400"
                height="419"
              />
              <p className="text-sm text-gray-500 text-center mt-4">
                Image source: <a href="https://delft.care/babychecker-2/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Delft Care - BabyChecker</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The BabyChecker mobile application guides healthcare professionals through standard abdominal sweeps. Our AI analyzes the scan in real-time and provides outputs for:
              </p>
              <ul className="space-y-3">
                {[
                  'Gestational age estimation',
                  'Foetal presentation assessment', 
                  'Placenta localisation',
                  'Real-time 2D fetal imaging',
                  'Instant risk detection'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Everything in One Bag Section */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full transform rotate-45"></div>
          </div>
          
          <div className="text-center mb-16 relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Everything in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">One Bag</span>
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The BabyChecker comes in a protective case crossbody bag and contains all the essential parts needed for immediate screening
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {[
              {
                number: "01",
                title: "Crossbody bag",
                image: "https://delft.care/wp-content/uploads/BabyCheckercase-200x137.png",
                description: "Protective carrying case for all components"
              },
              {
                number: "02", 
                title: "Ultrasound probe",
                image: "https://delft.care/wp-content/uploads/BabyCheckerProbe-200x137.jpg",
                description: "High-quality handheld ultrasound device"
              },
              {
                number: "03",
                title: "Android smartphone", 
                image: "https://delft.care/wp-content/uploads/BabyCheckersmartphone-200x137.png",
                description: "Dedicated device for running the application"
              },
              {
                number: "04",
                title: "Mobile application",
                image: "https://delft.care/wp-content/uploads/BabyCheckerProbe-200x137.png", 
                description: "AI-powered scanning and analysis software"
              },
              {
                number: "05",
                title: "User instruction card",
                image: "https://delft.care/wp-content/uploads/BabyCheckercard-200x137.png",
                description: "Quick reference guide for operators"
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Card */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/50 h-full">
                  {/* Image Container */}
                  <div className="relative mb-4">
                    <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <img
                        src={component.image}
                        alt={`${component.title} - BabyChecker component`}
                        className="w-full h-24 object-contain"
                        loading="lazy"
                        decoding="async"
                        width="200"
                        height="137"
                      />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="flex items-center justify-center mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {component.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {component.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-sm">
              <span className="text-sm text-gray-700 mr-2">Images source:</span>
              <a 
                href="https://delft.care/babychecker-2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                Delft Care - BabyChecker
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

BabyChecker.displayName = 'BabyChecker';

export default BabyChecker;