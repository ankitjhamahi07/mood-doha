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

// Assign mood button styles in a rotating pattern
const getMoodButtonStyle = (index: number) => {
  const styles = ['mood-button-sage', 'mood-button-saffron', 'mood-button-sky'];
  return styles[index % 3];
};

export default function MoodCloud() {
  const [, setLocation] = useLocation();

  const handleMoodSelect = (mood: string) => {
    setLocation(`/doha/${mood}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto"
    >
      {moods.map((mood, index) => (
        <motion.button
          key={mood}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.04
          }}
          whileHover={{ 
            scale: 1.03,
            y: -2
          }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleMoodSelect(mood)}
          className={`${getMoodButtonStyle(index)} px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-spiritual-sage focus:ring-opacity-30 capitalize backdrop-blur-sm`}
        >
          {mood}
        </motion.button>
      ))}
    </motion.div>
  );
}
