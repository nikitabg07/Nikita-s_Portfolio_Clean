import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/nikitabg07', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/nikita-gholap-a45438280', label: 'LinkedIn' },
    { icon: <FaEnvelope size={24} />, url: 'mailto:nikitagholap8706@gmail.com', label: 'Email' }
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden bg-white text-gray-800"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>

      <div ref={ref} className="container mx-auto px-4 flex flex-col items-center justify-center max-w-6xl relative z-10">
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Main content */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.8, 0.7],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-70"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.8, 0.7],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center relative z-10"
              >
                <motion.p 
                  className="text-lg md:text-xl text-blue-600 font-medium mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative z-10">Nikita Gholap</span>
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-100/50 -z-0" style={{ transform: 'skew(-12deg) translateX(-5%)' }}></span>
                </motion.h1>
                
                <motion.div 
                  className="text-2xl md:text-3xl font-medium text-gray-600 mb-8 min-h-[2.5rem]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="relative inline-block">
                    <TypeAnimation
                      sequence={[
                        'Software Developer',
                        2000,
                        'Full Stack (MERN) Developer',
                        2000,
                        'Data Science Enthusiast',
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="text-blue-600 relative z-10"
                    />
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-50 -z-0"></span>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  I build exceptional digital experiences with modern web technologies and a focus on clean, efficient code.
                </motion.p>

                {/* Social links */}
                <motion.div 
                  className="flex justify-center space-x-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div 
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  <a 
                    href="#projects" 
                    className="group inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      e.currentTarget.style.setProperty('--x', `${x}px`);
                      e.currentTarget.style.setProperty('--y', `${y}px`);
                    }}
                    style={{
                      '--x': '0px',
                      '--y': '0px'
                    }}
                  >
                    <span className="relative z-10">View My Work</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2), transparent 200px)'
                      }}
                    />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-gray-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
