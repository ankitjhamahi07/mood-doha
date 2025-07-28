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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { data: doha, isLoading, error, refetch } = useQuery<Doha>({
    queryKey: ["/api/dohas", mood, "random"],
    queryFn: () => fetch(`/api/dohas/${mood}/random`).then(res => res.json()),
    enabled: !!mood,
  });

  const handleNextDoha = async () => {
    if (!doha) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out animation, then refetch for a new random doha
    setTimeout(() => {
      refetch();
      setIsTransitioning(false);
    }, 400);
  };

  const handleBackToMoods = () => {
    setLocation("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-text text-lg font-inter italic"
        >
          Loading wisdom...
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <div className="text-spiritual-charcoal text-lg font-inter">
          Unable to load dohas. Please try again.
        </div>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-spiritual-sage border border-spiritual-sage px-8 py-3 rounded-full font-medium hover:bg-spiritual-sage hover:text-spiritual-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spiritual-sage focus:ring-opacity-30 shadow-sm hover:shadow-md"
        >
          Back to Moods
        </button>
      </div>
    );
  }

  if (!doha) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-spiritual-charcoal text-lg font-inter">
          No dohas found for this mood. Please try a different mood.
        </div>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-spiritual-sage border border-spiritual-sage px-8 py-3 rounded-full font-medium hover:bg-spiritual-sage hover:text-spiritual-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spiritual-sage focus:ring-opacity-50"
        >
          Back to Moods
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Selected Mood Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-3"
      >
        <div className="text-xs uppercase tracking-wider text-muted-text font-medium capitalize">
          {mood}
        </div>
        <div className="w-12 h-0.5 bg-spiritual-sage mx-auto opacity-40"></div>
      </motion.div>

      {/* Kabir says subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-muted-text font-playfair italic text-lg"
      >
        Kabir says...
      </motion.div>

      {/* Doha Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mood}-${doha?.id}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: isTransitioning ? 0 : 1, 
            y: isTransitioning ? -30 : 0 
          }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-12 px-6"
        >
          {/* Hindi Text (Devanagari) */}
          <div className="hindi-text">
            <p className="text-3xl md:text-5xl lg:text-6xl font-devanagari leading-relaxed text-spiritual-charcoal whitespace-pre-line tracking-wide">
              {doha.hindi}
            </p>
          </div>

          {/* Transliteration */}
          <div className="transliteration-text">
            <p className="text-lg md:text-xl font-inter font-light italic text-muted-text leading-relaxed whitespace-pre-line">
              {doha.transliteration}
            </p>
          </div>

          {/* English Translation */}
          <div className="translation-text">
            <p className="text-xl md:text-2xl lg:text-3xl font-playfair leading-relaxed text-spiritual-charcoal max-w-3xl mx-auto whitespace-pre-line">
              {doha.translation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12"
      >
        <button
          onClick={handleNextDoha}
          disabled={isTransitioning}
          className="bg-spiritual-sage text-spiritual-cream px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transform hover:scale-105 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spiritual-sage focus:ring-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          Next Doha
        </button>
        <button
          onClick={handleBackToMoods}
          className="bg-transparent text-spiritual-sage border border-spiritual-sage px-10 py-4 rounded-full font-medium hover:bg-spiritual-sage hover:text-spiritual-cream transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spiritual-sage focus:ring-opacity-30 shadow-sm hover:shadow-md"
        >
          Back to Moods
        </button>
      </motion.div>
    </>
  );
}
