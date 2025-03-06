'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does your recruitment process work?",
    answer: "Our process begins with a free consultation to understand your business needs. Our recruitment team then conducts targeted searches and thorough interviews. We present you with only the most qualified candidates, and you make the final hiring decision. You only pay when you successfully hire a candidate."
  },
  {
    question: "What makes your agency different?",
    answer: "We specialize exclusively in cleaning staff recruitment, with deep industry expertise and an extensive network. Our team personally vets every candidate, conducts face-to-face interviews, and ensures perfect cultural fits. We're not just a platform - we're your dedicated recruitment partner."
  },
  {
    question: "How long does the recruitment process take?",
    answer: "Typically, we can present qualified candidates within 1-2 weeks of our initial consultation. The exact timeline depends on your specific requirements and team size needs. For urgent staffing needs, we can often expedite the process."
  },
  {
    question: "What if a placement doesn't work out?",
    answer: "We offer a comprehensive replacement guarantee. If a placed candidate doesn't meet your expectations within the first month, we'll find a replacement at no additional cost. Our success is measured by your long-term satisfaction."
  },
  {
    question: "Do you handle all employment paperwork?",
    answer: "While we handle all recruitment-related documentation, the final employment contracts and paperwork are between you and the hired staff. We can recommend trusted HR partners if you need assistance with employment documentation."
  },
  {
    question: "Can you help with building entire cleaning teams?",
    answer: "Absolutely! We specialize in both individual placements and full team building. Whether you need one cleaner or a complete cleaning operation, our recruitment team can develop a tailored staffing plan to meet your needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions About Our{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Recruitment Service
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about how we can help you build your ideal cleaning team
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
          
          <div className="relative z-10 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'ring-2 ring-blue-400' : ''
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-gray-100 -mx-6 mb-6" />
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Contact our support team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 