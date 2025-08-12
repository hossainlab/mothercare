'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User, MessageSquare, Check } from 'lucide-react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    'No waiting in hospitals',
    'Comfortable home environment',
    'Expert healthcare professionals',
    'Instant AI-powered reports',
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.phone || !formData.location || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Format WhatsApp message
    const whatsappMessage = `🏥 *Matriseba Booking Request*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Location:* ${formData.location}
📅 *Preferred Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.time}
${formData.notes ? `📝 *Notes:* ${formData.notes}` : ''}

Please confirm my appointment for home ultrasound service.

Thank you!`;

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Open WhatsApp
      const whatsappURL = `https://wa.me/8801XXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL, '_blank');
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          location: '',
          date: '',
          time: '',
          notes: '',
        });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Home Visit
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule your ultrasound appointment today and experience healthcare at your doorstep
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.h3 
              className="text-3xl font-bold mb-8"
              variants={itemVariants}
            >
              Why Book With Us?
            </motion.h3>
            
            <motion.div className="space-y-6 mb-12" variants={itemVariants}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              variants={itemVariants}
            >
              <h4 className="text-2xl font-semibold mb-4">What to Expect</h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                  <span>Professional health agent arrives at your scheduled time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                  <span>Safe, comfortable ultrasound scan using BabyChecker</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                  <span>Instant AI-generated report with detailed analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0" />
                  <span>Expert explanation of results and recommendations</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Schedule Your Visit
            </h3>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Booking Submitted!
                </h4>
                <p className="text-gray-600 mb-6">
                  Your booking request has been sent. We&apos;ll contact you shortly to confirm your appointment.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    Redirecting to WhatsApp for instant confirmation...
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                      placeholder="+880 1XXX-XXXXXX"
                      required
                    />
                  </div>
                </motion.div>

                {/* Location Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your complete address"
                      required
                    />
                  </div>
                </motion.div>

                {/* Date and Time Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={today}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 appearance-none bg-white"
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>
                            {slot === '09:00' ? '9:00 AM' :
                             slot === '10:00' ? '10:00 AM' :
                             slot === '11:00' ? '11:00 AM' :
                             slot === '14:00' ? '2:00 PM' :
                             slot === '15:00' ? '3:00 PM' :
                             slot === '16:00' ? '4:00 PM' :
                             '5:00 PM'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                </div>

                {/* Notes Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Any special requirements or notes..."
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span>Booking...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </div>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;