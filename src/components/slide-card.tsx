import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideContent {
  emoji: string;
  subtitle: string;
  points: string[];
}

interface Slide {
  id: number;
  title: string;
  icon: LucideIcon;
  content: SlideContent;
  color: string;
  section?: string;
}

interface SlideCardProps {
  slide: Slide;
  isActive: boolean;
  onEnterPresentationMode?: () => void;
}

const SlideCard: React.FC<SlideCardProps> = ({
  slide,
  isActive,
  onEnterPresentationMode,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      className="w-full max-w-4xl"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-8 md:p-12 pb-14">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`w-full h-full bg-gradient-to-br ${slide.color}`} />
        </div>

        {/* Card Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${slide.color} flex items-center justify-center shadow-lg flex-shrink-0`}
            >
              <slide.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
              >
                {slide.title}
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl"
              >
                {slide.content.emoji}
              </motion.span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl font-semibold text-purple-200 mb-6"
          >
            {slide.content.subtitle}
          </motion.h3>

          {/* Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            {slide.content.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${slide.color} mt-2 flex-shrink-0`}
                />
                <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Presentation Mode Button - Moved to bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 right-4 z-20"
        >
          <Button
            onClick={onEnterPresentationMode}
            size="sm"
            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
          >
            <Maximize2 className="w-4 h-4 mr-2" />
            Apresentar
          </Button>
        </motion.div>

        {/* Animated Border */}
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default SlideCard;
