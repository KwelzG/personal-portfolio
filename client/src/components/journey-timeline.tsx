import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  age: string;
  title: string;
  description: string;
  isActive?: boolean;
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    age: "13",
    title: "Early entrepreneurial mindset",
    description: "Developed strategic thinking and began exploring technology's potential to solve real-world problems.",
    side: "left"
  },
  {
    age: "16",
    title: "Blockchain introduction",
    description: "First exposure to blockchain technology and cryptocurrency. Recognized the transformative potential of decentralized systems.",
    side: "right"
  },
  {
    age: "18",
    title: "Skill diversification",
    description: "Expanded skill set beyond technology, learning traditional trades while building digital expertise.",
    side: "left"
  },
  {
    age: "19",
    title: "Founded Prop3 & LexAI",
    description: "Launched two technology companies focused on AI and blockchain solutions for African markets.",
    side: "right",
    isActive: true
  },
  {
    age: "Future",
    title: "Scaling impact across Africa",
    description: "Building sustainable technology infrastructure that creates lasting economic opportunities across the continent.",
    side: "left"
  }
];

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="timeline-item flex items-center justify-center group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {item.side === "left" ? (
        <>
          <div className="w-full md:w-5/12 text-right pr-8">
            <motion.div
              className={`p-6 rounded-xl border transition-all duration-300 group-hover:shadow-lg ${
                item.isActive
                  ? "bg-gradient-to-r from-site-gold/10 to-site-silver/10 border-site-gold group-hover:border-site-gold/80 shadow-lg shadow-gold/20"
                  : item.age === "Future"
                  ? "bg-site-primary/60 border-site-silver/30 group-hover:border-site-silver/50"
                  : "bg-site-primary/80 border-site-gold/20 group-hover:border-site-gold/50 group-hover:shadow-gold/10"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-2xl font-bold mb-2 ${item.age === "Future" ? "text-site-silver" : "text-site-gold"}`}>
                Age {item.age}
                {item.isActive && " - NOW"}
              </h3>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className={item.age === "Future" ? "text-site-silver/80" : "text-site-silver"}>{item.description}</p>
              {item.isActive && (
                <div className="mt-4 inline-flex items-center space-x-2 bg-site-gold/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-tech text-site-gold">ACTIVE</span>
                </div>
              )}
            </motion.div>
          </div>
          <motion.div
            className={`w-6 h-6 rounded-full border-4 border-site-primary absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-150 ${
              item.isActive
                ? "w-8 h-8 bg-site-gold animate-glow"
                : item.age === "Future"
                ? "bg-site-silver"
                : "bg-site-gold"
            }`}
            whileHover={{ scale: 1.5 }}
          />
          <div className="w-full md:w-5/12" />
        </>
      ) : (
        <>
          <div className="w-full md:w-5/12" />
          <motion.div
            className={`w-6 h-6 rounded-full border-4 border-site-primary absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-150 ${
              item.isActive
                ? "w-8 h-8 bg-site-gold animate-glow"
                : item.age === "Future"
                ? "bg-site-silver"
                : "bg-site-gold"
            }`}
            whileHover={{ scale: 1.5 }}
          />
          <div className="w-full md:w-5/12 pl-8">
            <motion.div
              className={`p-6 rounded-xl border transition-all duration-300 group-hover:shadow-lg ${
                item.isActive
                  ? "bg-gradient-to-r from-site-gold/10 to-site-silver/10 border-site-gold group-hover:border-site-gold/80 shadow-lg shadow-gold/20"
                  : item.age === "Future"
                  ? "bg-site-primary/60 border-site-silver/30 group-hover:border-site-silver/50"
                  : "bg-site-primary/80 border-site-gold/20 group-hover:border-site-gold/50 group-hover:shadow-gold/10"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className={`text-2xl font-bold mb-2 ${item.age === "Future" ? "text-site-silver" : "text-site-gold"}`}>
                Age {item.age}
                {item.isActive && " - NOW"}
              </h3>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className={item.age === "Future" ? "text-site-silver/80" : "text-site-silver"}>{item.description}</p>
              {item.isActive && (
                <div className="mt-4 inline-flex items-center space-x-2 bg-site-gold/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-tech text-site-gold">ACTIVE</span>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 bg-site-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            The <span className="text-site-gold">Journey</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            Key milestones that shaped my entrepreneurial journey and vision for Africa's digital transformation.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-site-gold via-site-silver to-site-gold" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={item.age} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
