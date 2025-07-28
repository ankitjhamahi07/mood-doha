import { useParams } from "wouter";
import { motion } from "framer-motion";
import DohaDisplay from "@/components/doha-display";

export default function DohaPage() {
  const { mood } = useParams<{ mood: string }>();

  if (!mood) {
    return <div>Error: No mood specified</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        className="max-w-3xl mx-auto text-center space-y-12"
      >
        <DohaDisplay mood={mood} />
      </motion.div>
    </div>
  );
}
