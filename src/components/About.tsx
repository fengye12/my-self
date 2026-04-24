import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const milestones = [
  {
    icon: GraduationCap,
    year: '毕业起点',
    title: '本科毕业，踏入互联网',
    desc: '怀揣着对技术和互联网的热爱，正式开启了我的职业生涯',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    icon: Briefcase,
    year: '深耕十年',
    title: '互联网行业摸爬滚打',
    desc: '十年沉淀，经历了行业的起伏变迁，积累了丰富的经验与认知',
    color: 'text-lavender-500',
    bg: 'bg-lavender-50',
  },
  {
    icon: Lightbulb,
    year: '第七年',
    title: '找到真正适合自己的事业',
    desc: '毕业第七年，终于找到了与自己契合的方向，一切开始清晰',
    color: 'text-pink-400',
    bg: 'bg-pink-50',
  },
  {
    icon: TrendingUp,
    year: '坚定信念',
    title: '钱，其实没有那么难赚',
    desc: '当你找到了对的方向，用对了方法，你会发现赚钱是一件自然而然的事',
    color: 'text-lavender-400',
    bg: 'bg-lavender-50',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-script text-3xl text-lavender-500 block mb-2">About Me</span>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-pink-900 tracking-tight">
            关于我的故事
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-lavender-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Story intro card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="soft-card p-8 md:p-10 mb-16 text-center"
        >
          <p className="font-sans text-base md:text-lg leading-relaxed text-pink-800/80 max-w-2xl mx-auto">
            我是一个普通的<span className="font-semibold text-pink-600">本科毕业生</span>，
            在<span className="font-semibold text-lavender-600">互联网行业</span>深耕了十年。
            这十年里，有过迷茫、有过焦虑，但也在不断成长。
            毕业第七年的时候，我终于找到了真正适合自己的事业方向——
            那一刻我明白了，
            <span className="font-script text-xl text-pink-500">
              人生不是一场短跑，而是一段慢慢绽放的旅程。
            </span>
          </p>
        </motion.div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="soft-card p-6 md:p-8 flex gap-5 items-start"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center`}>
                <item.icon size={22} className={item.color} />
              </div>
              <div>
                <span className="font-script text-lg text-lavender-400 block">{item.year}</span>
                <h3 className="font-sans font-bold text-lg text-pink-900 mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-pink-700/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
