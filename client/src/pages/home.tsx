import { motion } from "framer-motion";
import MoodCloud from "@/components/mood-cloud";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-spiritual-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center space-y-16"
      >
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair font-medium text-spiritual-charcoal leading-tight"
          >
            Choose Your Mood
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-inter font-light text-muted-text italic"
          >
            Discover wisdom through Kabir's timeless dohas
          </motion.div>
        </div>
        <MoodCloud />
      </motion.div>
    </div>
  );
}
