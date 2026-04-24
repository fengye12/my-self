import { motion } from 'framer-motion';
import { CreditCard, Store, ShieldCheck, Shirt, Package } from 'lucide-react';

const resources = [
  {
    icon: CreditCard,
    title: '各经销商名片',
    desc: '深度合作多家优质经销商，掌握一手货源信息，价格优势明显',
    gradient: 'from-pink-400 to-pink-500',
    bgLight: 'bg-pink-50',
  },
  {
    icon: Store,
    title: '旗舰店团购',
    desc: '直连品牌旗舰店，组织团购享受批量优惠，正品保障无忧',
    gradient: 'from-lavender-400 to-lavender-500',
    bgLight: 'bg-lavender-50',
  },
  {
    icon: ShieldCheck,
    title: '官旗代下',
    desc: '官方旗舰店代下单服务，享受内部渠道价格，省心省力',
    gradient: 'from-pink-300 to-lavender-400',
    bgLight: 'bg-pink-50',
  },
  {
    icon: Shirt,
    title: '档口童装',
    desc: '直通源头档口童装，款式新颖、价格实惠，满足多样需求',
    gradient: 'from-lavender-300 to-pink-400',
    bgLight: 'bg-lavender-50',
  },
  {
    icon: Package,
    title: '专属拿货软件 · 一件代发',
    desc: '拥有专属拿货软件，支持一件代发，零库存压力，轻松开启创业之路',
    gradient: 'from-pink-500 to-lavender-500',
    bgLight: 'bg-pink-50',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-lavender-400 block mb-2">Resources</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-pink-900 tracking-tight">
            我的核心资源
          </h2>
          <p className="font-sans text-base text-pink-700/60 mt-4 max-w-lg mx-auto">
            多年积累的供应链资源，是我副业的核心竞争力
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-lavender-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Resources grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {resources.map((item, i) => {
            const isWide = i === 0 || i === 4;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`soft-card p-7 md:p-8 group ${
                  isWide ? 'md:col-span-3' : 'md:col-span-2'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bgLight} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <item.icon size={22} className={`bg-gradient-to-r ${item.gradient} bg-clip-text`} style={{ color: i % 2 === 0 ? '#EC4899' : '#8B5CF6' }} />
                </div>
                <h3 className="font-sans font-bold text-lg text-pink-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-pink-700/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
