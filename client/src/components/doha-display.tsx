import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Doha } from "@shared/schema";

interface DohaDisplayProps {
  mood: string;
}

export default function DohaDisplay({ mood }: DohaDisplayProps) {
  const [, setLocation] = useLocation();
  const [dohaIndex, setDohaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { data: dohas, isLoading, error } = useQuery<Doha[]>({
    queryKey: ["/api/dohas", mood],
    enabled: !!mood,
  });

  const handleNextDoha = async () => {
    if (!dohas || dohas.length === 0) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out animation
    setTimeout(() => {
      setDohaIndex((prevIndex) => (prevIndex + 1) % dohas.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToMoods = () => {
    setLocation("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-sage text-lg font-inter">Loading wisdom...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-charcoal text-lg font-inter">
          Unable to load dohas. Please try again.
        </div>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-sage border border-sage px-8 py-3 rounded-full font-medium hover:bg-sage hover:text-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50"
        >
          Back to Moods
        </button>
      </div>
    );
  }

  if (!dohas || dohas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-charcoal text-lg font-inter">
          No dohas found for this mood. Please try a different mood.
        </div>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-sage border border-sage px-8 py-3 rounded-full font-medium hover:bg-sage hover:text-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50"
        >
          Back to Moods
        </button>
      </div>
    );
  }

  const currentDoha = dohas[dohaIndex];

  return (
    <>
      {/* Selected Mood Header */}
      <div className="space-y-2">
        <div className="text-sm uppercase tracking-wider text-sage font-medium capitalize">
          {mood}
        </div>
        <div className="w-16 h-0.5 bg-sage mx-auto opacity-60"></div>
      </div>

      {/* Doha Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mood}-${dohaIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isTransitioning ? 0 : 1, 
            y: isTransitioning ? -20 : 0 
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="space-y-8 px-4"
        >
          {/* Hindi Text (Devanagari) */}
          <div className="hindi-text">
            <p className="text-3xl md:text-4xl lg:text-5xl font-devanagari font-medium leading-relaxed text-charcoal whitespace-pre-line">
              {currentDoha.hindi}
            </p>
          </div>

          {/* Transliteration */}
          <div className="transliteration-text">
            <p className="text-lg md:text-xl font-inter font-light italic text-sage leading-relaxed whitespace-pre-line">
              {currentDoha.transliteration}
            </p>
          </div>

          {/* English Translation */}
          <div className="translation-text">
            <p className="text-xl md:text-2xl font-serif font-normal leading-relaxed text-charcoal max-w-2xl mx-auto whitespace-pre-line">
              {currentDoha.translation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
        <button
          onClick={handleNextDoha}
          disabled={isTransitioning}
          className="bg-sage text-cream px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Doha
        </button>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-sage border border-sage px-8 py-3 rounded-full font-medium hover:bg-sage hover:text-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50"
        >
          Back to Moods
        </button>
      </div>
    </>
  );
}
