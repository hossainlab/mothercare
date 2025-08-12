'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is the ultrasound scan safe for my baby?',
      answer: 'Yes, absolutely. Our BabyChecker device uses the same safe ultrasound technology used in hospitals worldwide. It\'s completely radiation-free and non-invasive. The technology has been tested extensively and is approved by medical authorities.',
    },
    {
      question: 'How accurate is the AI-generated report?',
      answer: 'Our AI technology has been trained on thousands of ultrasound images and provides highly accurate analysis with a 99.9% precision rate. However, we always recommend following up with your doctor for comprehensive care and to discuss the results in detail.',
    },
    {
      question: 'What areas do you cover in Bangladesh?',
      answer: 'We currently serve Dhaka, Chittagong, Sylhet, Rajshahi, and surrounding areas. We\'re expanding to more cities across Bangladesh. Contact us through WhatsApp to check availability in your specific area.',
    },
    {
      question: 'How long does the home visit take?',
      answer: 'A typical home visit takes 30-45 minutes, including the ultrasound scan, AI analysis, and detailed explanation of results by our trained health agent. We ensure you have enough time to ask questions and understand your report.',
    },
    {
      question: 'Can I get a second opinion on my results?',
      answer: 'Yes, you can always consult with additional healthcare professionals. Our reports are compatible with standard medical systems and can be easily shared with any doctor or healthcare provider for a second opinion.',
    },
    {
      question: 'What should I prepare for the home visit?',
      answer: 'Please ensure you have a comfortable, private space with good lighting. Wear comfortable clothing that allows easy access to your abdomen. Our health agent will bring all necessary equipment and supplies.',
    },
    {
      question: 'What is the cost of the service?',
      answer: 'Our home ultrasound service is competitively priced and much more affordable than traditional hospital visits. Contact us for current pricing and any available packages. We also accept various payment methods for your convenience.',
    },
    {
      question: 'What if I need to reschedule my appointment?',
      answer: 'You can reschedule your appointment up to 24 hours before the scheduled time through WhatsApp or by calling our support team. We understand that pregnancy can be unpredictable and we\'re flexible with scheduling changes.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our home ultrasound service
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-blue-600 to-pink-600 mb-4" />
                        <motion.p
                          className="text-gray-600 leading-relaxed"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Still have questions section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-8 opacity-90">
              Our support team is available 24/7 to help you with any questions about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/8801XXXXXXXXX?text=Hello%2C%20I%20have%20questions%20about%20Matriseba%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688z"/>
                </svg>
                Chat on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+8801XXXXXXXXX"
                className="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;