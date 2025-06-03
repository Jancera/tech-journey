
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-purple-200">
          Progresso da Apresentação
        </span>
        <span className="text-sm font-medium text-purple-200">
          {current} / {total}
        </span>
      </div>
      
      <div className="relative">
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full relative"
          >
            {/* Animated glow effect */}
            <motion.div
              animate={{ 
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-between mt-2">
          {Array.from({ length: total }, (_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: index < current ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className={`w-2 h-2 rounded-full ${
                index < current 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
