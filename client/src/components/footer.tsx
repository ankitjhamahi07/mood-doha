import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mt-20 py-12 border-t border-vedic-saffron/20"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-r from-transparent via-vedic-saffron to-transparent h-0.5 w-32"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-spiritual-cream p-2">
          <div className="text-vedic-saffron text-sm">❋</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Sanskrit Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3"
        >
          <div className="text-lg font-noto-devanagari text-spiritual-charcoal leading-relaxed">
            सत्यं शिवं सुन्दरम्
          </div>
          <div className="text-sm text-muted-text italic font-light tracking-wide">
            Truth • Consciousness • Beauty
          </div>
        </motion.div>

        {/* Ornamental Divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-6"
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-vedic-teal to-transparent opacity-60"></div>
          <div className="text-vedic-maroon">🪷</div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-vedic-rose-gold to-transparent opacity-60"></div>
          <div className="text-vedic-indigo">🕉️</div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-vedic-teal to-transparent opacity-60"></div>
          <div className="text-vedic-maroon">🪷</div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-vedic-rose-gold to-transparent opacity-60"></div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-6"
        >
          {/* Kabir Quote */}
          <div className="space-y-3">
            <div className="text-sm font-noto-devanagari text-spiritual-charcoal leading-relaxed">
              "जहाँ सुमति तहं संपत्ति नाना"
            </div>
            <div className="text-xs text-muted-text italic">
              "Where there is wisdom, there are manifold blessings"
            </div>
          </div>

          {/* Attribution */}
          <div className="space-y-2">
            <div className="text-xs text-muted-text font-light">
              A digital sanctuary for exploring the timeless wisdom of
            </div>
            <div className="text-sm font-playfair font-medium text-spiritual-charcoal tracking-wide">
              Sant Kabir Das
            </div>
            <div className="text-xs text-muted-text">
              (c. 1440–1518 CE)
            </div>
          </div>

          {/* Spiritual Message */}
          <div className="max-w-2xl mx-auto text-xs text-muted-text leading-relaxed font-light">
            May these ancient verses guide you on your inner journey, bringing clarity to the mind, 
            peace to the heart, and light to the soul.
          </div>
        </motion.div>

        {/* Bottom Ornaments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-6 space-y-4"
        >
          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-3 text-xs text-vedic-saffron opacity-40">
            <span>❋</span>
            <span>•</span>
            <span>🌸</span>
            <span>•</span>
            <span>❋</span>
            <span>•</span>
            <span>🌸</span>
            <span>•</span>
            <span>❋</span>
          </div>

          {/* Built by Attribution */}
          <div className="text-xs text-muted-text font-light">
            Built by Ankit
          </div>

          {/* Final Blessing */}
          <div className="text-xs text-muted-text font-light italic">
            ॐ शान्ति शान्ति शान्तिः
          </div>
        </motion.div>

      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-vedic-saffron/3 to-transparent pointer-events-none"></div>
    </motion.footer>
  );
}