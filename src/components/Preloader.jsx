import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-500 border-b-blue-600"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 border-l-blue-400 animate-spin"></div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            Krithika
          </h1>
          <p className="text-gray-300">Loading portfolio...</p>
          
          <div className="flex justify-center space-x-6 mt-8">
            {[Code, Palette, Zap].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
                className="p-3 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"
              >
                <Icon className="w-6 h-6 text-blue-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;