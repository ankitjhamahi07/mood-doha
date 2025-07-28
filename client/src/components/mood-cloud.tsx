import { motion } from "framer-motion";
import { useLocation } from "wouter";

const moods = [
  "peaceful", "restless", "joyful", "curious", "contemplative", "confused",
  "grateful", "anxious", "hopeful", "reflective", "lost", "inspired",
  "melancholic", "seeking", "humble", "angry", "loving", "doubtful",
  "enlightened", "yearning", "content", "frustrated", "devoted",
  "questioning", "compassionate", "judgmental", "wise", "lonely",
  "fulfilled", "awakening"
];

export default function MoodCloud() {
  const [, setLocation] = useLocation();

  const handleMoodSelect = (mood: string) => {
    setLocation(`/doha/${mood}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-5xl mx-auto"
    >
      {moods.map((mood, index) => (
        <motion.button
          key={mood}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: index * 0.03
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleMoodSelect(mood)}
          className="bg-warm-gray hover:bg-sage hover:text-cream text-charcoal px-4 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage focus:ring-opacity-50 capitalize"
        >
          {mood}
        </motion.button>
      ))}
    </motion.div>
  );
}
