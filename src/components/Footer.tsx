import { motion } from 'framer-motion';
import { Heart, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-28 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-script text-3xl text-lavender-400 block mb-3">Get in Touch</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-pink-900 tracking-tight mb-4">
            一起聊聊吧
          </h2>
          <p className="font-sans text-base text-pink-700/60 leading-relaxed max-w-lg mx-auto mb-10">
            无论你是想了解更多关于我的副业，还是想加入我的团队，
            <br className="hidden md:block" />
            都欢迎随时联系我，期待与你相遇
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <div className="soft-card px-8 py-4 flex items-center gap-3">
            <MessageCircle size={20} className="text-pink-400" />
            <span className="font-sans text-sm text-pink-800 font-medium">微信咨询</span>
          </div>
          <div className="soft-card px-8 py-4 flex items-center gap-3">
            <Mail size={20} className="text-lavender-400" />
            <span className="font-sans text-sm text-pink-800 font-medium">私信联系</span>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <blockquote className="font-script text-2xl md:text-3xl text-lavender-400/80 leading-relaxed">
            "选择比努力重要，但持续的努力会让选择更有价值"
          </blockquote>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-pink-200/30">
          <p className="font-sans text-xs text-pink-600/40 flex items-center justify-center gap-1.5">
            Made with <Heart size={12} className="text-pink-400" fill="currentColor" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
