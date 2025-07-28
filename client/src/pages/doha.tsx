import { useParams } from "wouter";
import { motion } from "framer-motion";
import DohaDisplay from "@/components/doha-display";

export default function DohaPage() {
  const { mood } = useParams<{ mood: string }>();

  if (!mood) {
    return <div>Error: No mood specified</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Vedic background ornament */}
      <div className="absolute inset-0 vedic-ornament pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="max-w-4xl mx-auto text-center space-y-16 relative z-10"
      >
        <DohaDisplay mood={mood} />
      </motion.div>
    </div>
  );
}
