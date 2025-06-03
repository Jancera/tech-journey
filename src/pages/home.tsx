import PresentationModal from "@/components/presentation-modal";
import ProgressBar from "@/components/progress-bar";
import SlideCard from "@/components/slide-card";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/slides";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const enterPresentationMode = () => {
    setIsPresentationMode(true);
  };
  const exitPresentationMode = () => {
    setIsPresentationMode(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Jornada Tech &amp; Design
          </h1>
          <p className="text-xl text-gray-300">
            Uma trilha completa para sua carreira na tecnologia!
          </p>
        </motion.header>

        {/* Progress Bar */}
        <ProgressBar current={currentSlide + 1} total={slides.length} />

        {/* Current Section Display */}
        {slides[currentSlide].section && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="text-center mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold">
              {slides[currentSlide].section}
            </span>
          </motion.div>
        )}

        {/* Main Slide Display */}
        <div className="flex justify-center mb-8">
          <AnimatePresence mode="wait">
            <SlideCard
              key={slides[currentSlide].id}
              slide={slides[currentSlide]}
              isActive={true}
              onEnterPresentationMode={enterPresentationMode}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Slide Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-400 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Slide Overview Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => goToSlide(index)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-purple-400 bg-white/20"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div
                className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r ${slide.color} flex items-center justify-center`}
              >
                <slide.icon className="w-4 h-4 text-white" />
              </div>
              <p className="text-xs text-center font-medium">{slide.title}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Presentation Modal */}
      <PresentationModal
        isOpen={isPresentationMode}
        onClose={exitPresentationMode}
        slide={slides[currentSlide]}
        onNext={nextSlide}
        onPrev={prevSlide}
        canGoNext={currentSlide < slides.length - 1}
        canGoPrev={currentSlide > 0}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
};

export default HomePage;
