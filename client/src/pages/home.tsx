import { motion } from "framer-motion";
import MoodCloud from "@/components/mood-cloud";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Vedic background ornament */}
      <div className="absolute inset-0 vedic-ornament pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center space-y-20 relative z-10"
      >
        {/* Decorative Title Section */}
        <div className="space-y-10">
          {/* Sanskrit-inspired decorative title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-text font-light">
              ॐ अंतर्दर्शन ॐ
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-medium text-spiritual-charcoal leading-tight tracking-wide">
              Choose Your State of Mind
            </h1>
          </motion.div>
          
          {/* Ornamental divider */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center space-x-4"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-vedic-saffron to-transparent opacity-60"></div>
            <div className="text-vedic-saffron text-xl">❋</div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-vedic-saffron to-transparent opacity-60"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-inter font-light text-muted-text italic max-w-2xl mx-auto leading-relaxed"
          >
            Discover ancient wisdom through Kabir's timeless verses,<br/>
            each doha a doorway to deeper understanding
          </motion.div>
        </div>
        
        {/* Enhanced Mood Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Subtle background glow for the mood cloud */}
          <div className="absolute inset-0 bg-gradient-radial from-vedic-saffron/5 via-transparent to-transparent rounded-full blur-3xl"></div>
          <MoodCloud />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
