import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { User, Upload } from "lucide-react";

interface TimelineItem {
  id: number;
  age: string;
  title: string;
  description: string;
  side: "left" | "right";
  isActive: boolean | null;
  imageUrl: string | null;
  displayOrder: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

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
  const { data: timelineItems = [], isLoading } = useQuery({
    queryKey: ["/api/timeline"],
  });

  if (isLoading) {
    return (
      <section id="journey" className="py-20 bg-site-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-site-gold">Loading timeline...</div>
          </div>
        </div>
      </section>
    );
  }

  // Calculate dynamic path for SVG based on number of items
  const itemCount = timelineItems.length;
  const pathHeight = Math.max(800, itemCount * 200);
  const generateCurvedPath = (height: number, items: number) => {
    if (items <= 1) return "M 32 0 L 32 200";
    
    const stepHeight = height / (items - 1);
    let path = "M 32 0";
    
    for (let i = 1; i < items; i++) {
      const y = i * stepHeight;
      const prevY = (i - 1) * stepHeight;
      const midY = prevY + stepHeight / 2;
      
      // Alternate curve directions
      const curveX = i % 2 === 1 ? 25 : 39;
      
      path += ` Q ${curveX} ${midY} 32 ${y}`;
    }
    
    return path;
  };

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
          {/* Dynamic Curved Timeline - SVG Path */}
          <svg 
            className="absolute left-1/2 transform -translate-x-1/2 w-16 h-full pointer-events-none" 
            viewBox={`0 0 64 ${pathHeight}`} 
            preserveAspectRatio="xMidYStretch"
            style={{ height: `${itemCount * 16 * 16}px` }}
          >
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                <stop offset="30%" stopColor="#C0C0C0" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#C0C0C0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d={generateCurvedPath(pathHeight, itemCount)}
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-lg"
            />
          </svg>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item: TimelineItem, index: number) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
