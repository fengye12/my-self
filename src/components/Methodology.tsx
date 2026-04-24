import { motion } from 'framer-motion';
import { Copy, Rocket, Eye, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Copy,
    title: '可复制的方法论',
    desc: '我总结出了一套完整的、可以直接复制的创业方法论，不需要你从零摸索',
  },
  {
    icon: Rocket,
    title: '教学赋能代理',
    desc: '手把手教我的代理团队，让每一个人都能掌握核心技能，实现副业自由',
  },
  {
    icon: Eye,
    title: '拓展眼界',
    desc: '这份副业不只是赚眼前的钱，更重要的是让你看到更广阔的商业世界',
  },
  {
    icon: Brain,
    title: '升级思维方式',
    desc: '从打工思维到老板思维，从消费者视角到供应链视角，全面升级你的认知',
  },
];

const benefits = [
  '零库存压力，一件代发',
  '成熟的供应链资源共享',
  '一对一带教，全程陪跑',
  '灵活时间，不影响主业',
  '持续迭代的方法论支持',
  '志同道合的社群交流',
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 md:py-32 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-pink-500 block mb-2">Methodology</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-pink-900 tracking-tight">
            不只是赚钱，更是一种成长
          </h2>
          <p className="font-sans text-base text-pink-700/60 mt-4 max-w-xl mx-auto">
            我有一套可以直接复制的方法论，帮助我的代理实现副业自由
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Method cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="soft-card p-7 flex gap-5 items-start group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-pink-100 to-lavender-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <step.icon size={20} className="text-lavender-500" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-pink-900 mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-pink-700/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="soft-card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <span className="font-script text-2xl text-lavender-400 block mb-2">Why Join?</span>
              <h3 className="font-sans text-2xl font-bold text-pink-900 mb-4">
                加入我，一起成长
              </h3>
              <p className="font-sans text-base text-pink-700/70 leading-relaxed mb-6">
                这不仅仅是一份副业，更是一次认知升级的机会。
                当你开始用创业者的视角看世界，你会发现一切都不一样了。
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-lavender-500 text-white font-sans font-semibold no-underline hover:opacity-90 transition-opacity text-sm shadow-[0_4px_20px_rgba(236,72,153,0.25)]"
              >
                开启副业之路
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-lavender-400 flex-shrink-0" />
                    <span className="font-sans text-sm text-pink-800/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
