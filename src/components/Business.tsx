import { motion } from 'framer-motion';
import { Baby, ShoppingBag, Users, Star } from 'lucide-react';

export default function Business() {
  return (
    <section id="business" className="py-24 md:py-32 px-4 relative">
      {/* Soft background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-lavender-100/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-pink-100/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-pink-400 block mb-2">Side Business</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-pink-900 tracking-tight">
            我的副业之路
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Main business card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="soft-card p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Icon cluster */}
            <div className="flex-shrink-0 relative w-28 h-28">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100 to-lavender-100 flex items-center justify-center">
                <Baby size={40} className="text-pink-500" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-lavender-100 flex items-center justify-center animate-float">
                <Star size={14} className="text-lavender-500" fill="currentColor" />
              </div>
              <div className="absolute -bottom-1 -left-1 w-7 h-7 rounded-lg bg-pink-100 flex items-center justify-center animate-float-delay">
                <ShoppingBag size={12} className="text-pink-400" />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="font-sans text-2xl font-bold text-pink-900 mb-3">
                母婴用品团购
              </h3>
              <p className="font-sans text-base text-pink-700/70 leading-relaxed mb-4">
                我目前的副业主要是做母婴用品团购。从一个人开始，慢慢积累资源、建立渠道，
                到现在已经形成了一套完整的供应链和销售体系。
              </p>
              <p className="font-sans text-base text-pink-700/70 leading-relaxed">
                这份副业不仅仅是为了赚取额外收入，更是让我看到了
                <span className="font-semibold text-lavender-600">不同的商业世界</span>
                ，拓展了我的视野和思维方式。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: ShoppingBag, label: '母婴品类', value: '全覆盖', color: 'text-pink-500' },
            { icon: Users, label: '代理团队', value: '持续壮大', color: 'text-lavender-500' },
            { icon: Star, label: '合作品牌', value: '优质资源', color: 'text-pink-400' },
            { icon: Baby, label: '服务理念', value: '品质至上', color: 'text-lavender-400' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="soft-card p-5 text-center"
            >
              <stat.icon size={24} className={`${stat.color} mx-auto mb-2`} />
              <div className="font-sans font-bold text-lg text-pink-900">{stat.value}</div>
              <div className="font-sans text-xs text-pink-600/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
