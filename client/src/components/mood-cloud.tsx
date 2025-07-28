import { motion } from "framer-motion";
import { useLocation } from "wouter";

const moods = [
  "peaceful", "restless", "joyful", "curious", "contemplative", "confused",
  "grateful", "anxious", "hopeful", "reflective", "lost", "inspired",
  "melancholic", "seeking", "humble", "loving", "doubtful",
  "enlightened", "yearning", "content", "frustrated", "devoted",
  "questioning", "compassionate", "judgmental", "wise", "thoughtful",
  "fulfilled", "awakening", "mortal", "philosophical", "empathetic",
  "forgiving", "balanced", "authentic", "honest", "surrendered",
  "faithful", "kind", "patient", "calm", "strategic", "mystical",
  "urgent", "realistic", "caring", "inner-focused"
];

// Assign Vedic-inspired mood button styles in a rotating pattern
const getVedicMoodButtonStyle = (index: number) => {
  const styles = [
    'mood-button-vedic-saffron', 
    'mood-button-vedic-teal', 
    'mood-button-vedic-maroon',
    'mood-button-vedic-indigo',
    'mood-button-vedic-rose'
  ];
  return styles[index % 5];
};

// Get varying button sizes for natural cloud effect
const getButtonSize = (index: number) => {
  const sizes = ['text-sm px-4 py-2', 'text-base px-5 py-3', 'text-sm px-6 py-2.5'];
  return sizes[index % 3];
};

export default function MoodCloud() {
  const [, setLocation] = useLocation();

  const handleMoodSelect = (mood: string) => {
    setLocation(`/doha/${mood}`);
  };

  return (
    <div className="relative">
      {/* Decorative border elements */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-vedic-saffron text-2xl opacity-40">
        ❋
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-vedic-teal text-2xl opacity-40">
        ❋
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 max-w-7xl mx-auto p-6 relative"
      >
        {moods.map((mood, index) => (
          <motion.button
            key={mood}
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.05
            }}
            whileHover={{ 
              scale: 1.05,
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMoodSelect(mood)}
            className={`${getVedicMoodButtonStyle(index)} ${getButtonSize(index)} mood-float rounded-lg font-medium transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-vedic-saffron focus:ring-opacity-30 capitalize relative overflow-hidden shadow-sm hover:shadow-lg`}
            style={{
              animationDelay: `${(index * 0.2) % 2}s`
            }}
          >
            {/* Subtle shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out pointer-events-none"></div>
            {mood}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
