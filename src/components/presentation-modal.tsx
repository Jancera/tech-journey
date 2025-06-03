import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

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

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide;
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  currentSlide: number;
  totalSlides: number;
}

const PresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  slide,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  currentSlide,
  totalSlides,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        >
          {/* Close Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 z-[100]"
          >
            <Button
              onClick={onClose}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </Button>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-6 text-white/70 text-lg font-medium z-[100]"
          >
            {currentSlide + 1} / {totalSlides}
          </motion.div>

          {/* Main Content */}
          <div className="h-full overflow-y-auto relative z-10">
            <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="w-full max-w-6xl"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-6 md:p-12 lg:p-16">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.color}`}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 text-center">
                    {/* Section Badge */}
                    {slide.section && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold text-white mb-8"
                      >
                        {slide.section}
                      </motion.div>
                    )}

                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col items-center gap-6 mb-12"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${slide.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <slide.icon className="w-12 h-12 text-white" />
                      </motion.div>

                      <div>
                        <motion.h1
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
                        >
                          {slide.title}
                        </motion.h1>
                      </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl md:text-3xl lg:text-4xl font-semibold text-purple-200 mb-12"
                    >
                      {slide.content.subtitle}
                    </motion.h2>

                    {/* Points */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-6 max-w-4xl mx-auto"
                    >
                      {slide.content.points.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.15 }}
                          className="flex items-center gap-6 justify-center"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className={`w-4 h-4 rounded-full bg-gradient-to-r ${slide.color} flex-shrink-0`}
                          />
                          <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 leading-relaxed text-left flex-1 max-w-3xl">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-[100]">
            <Button
              onClick={onPrev}
              disabled={!canGoPrev}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6 mr-2" />
              Anterior
            </Button>
            <Button
              onClick={onNext}
              disabled={!canGoNext}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white disabled:opacity-50"
            >
              Próximo
              <ChevronRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PresentationModal;
