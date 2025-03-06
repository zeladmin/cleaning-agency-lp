'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Hero = () => {
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random positions for floating elements once mounted
    const elements = Array.from({ length: 6 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/30 pointer-events-none" />
      
      {/* Enhanced Background Animation Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-green-100 to-blue-100 opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-20"
            initial={{ 
              x: element.x,
              y: element.y
            }}
            animate={{
              y: [element.y, element.y - 20, element.y],
              x: [element.x, element.x + (Math.random() * 20 - 10), element.x],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
              Elite Cleaning Staff Agency
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Partner in Finding{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Elite Cleaning Employees
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-700 font-semibold mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tired of unreliable cleaners?
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our expert recruitment team personally handles every aspect of building your cleaning staff—from sourcing and vetting to ensuring the perfect cultural fit.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button 
              onClick={() => scrollToSection('lead-form')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Your Free Consultation
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { text: "Expert Recruitment Team", icon: "shield-check" },
              { text: "Personalized Service", icon: "users" },
              { text: "Long-term Partnership", icon: "star" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 