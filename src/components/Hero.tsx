import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4">
      {/* Decorative floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-float absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-pink-200/40 to-lavender-200/30 blur-xl" />
        <div className="animate-float-delay absolute top-[25%] right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-lavender-200/40 to-pink-100/30 blur-xl" />
        <div className="animate-float-slow absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-gradient-to-br from-pink-300/30 to-lavender-100/20 blur-xl" />
        <div className="animate-breathe absolute top-[60%] right-[10%] w-16 h-16 rounded-full bg-pink-200/30 blur-lg" />
        <div className="animate-float absolute bottom-[30%] right-[30%] w-28 h-28 rounded-full bg-gradient-to-br from-lavender-100/30 to-cream/40 blur-xl" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="animate-float inline-block">
            <Heart size={20} className="text-pink-400" fill="currentColor" />
          </span>
          <span className="animate-float-delay inline-block">
            <Sparkles size={18} className="text-lavender-400" />
          </span>
          <span className="animate-float-slow inline-block">
            <Sun size={18} className="text-pink-300" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-5xl md:text-7xl font-bold leading-tight mb-4"
        >
          <span className="gradient-text">Hi, 这是我的</span>
          <br />
          <span className="text-pink-800">生活小世界</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-sans text-lg md:text-xl text-pink-700/70 leading-relaxed max-w-lg mx-auto mb-8"
        >
          互联网人的十年成长路，从迷茫到笃定
          <br />
          <span className="font-script text-lavender-500 text-xl md:text-2xl">
            相信生活，相信自己
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="soft-card px-8 py-3.5 font-sans font-semibold text-pink-700 hover:text-pink-600 no-underline inline-flex items-center gap-2 text-base"
          >
            <Heart size={16} fill="currentColor" className="text-pink-400" />
            了解我的故事
          </a>
          <a
            href="#business"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-lavender-500 text-white font-sans font-semibold no-underline hover:opacity-90 transition-opacity text-base shadow-[0_4px_20px_rgba(236,72,153,0.3)]"
          >
            探索副业之路
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-pink-300/50 mx-auto flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
