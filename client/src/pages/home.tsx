import { motion } from "framer-motion";
import MoodCloud from "@/components/mood-cloud";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="max-w-4xl mx-auto text-center space-y-12"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-charcoal leading-tight">
            Choose Your Mood
            <div className="text-lg md:text-xl font-inter font-light text-sage mt-3">
              Discover wisdom through Kabir's dohas
            </div>
          </h1>
        </div>
        <MoodCloud />
      </motion.div>
    </div>
  );
}
