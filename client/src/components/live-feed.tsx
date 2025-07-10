import { motion } from "framer-motion";

const currentLearning = [
  {
    title: "Advanced Solidity patterns",
    description: "Smart contract optimization for Prop3"
  },
  {
    title: "Vector databases",
    description: "Enhancing LexAI's search capabilities"
  },
  {
    title: "African market dynamics",
    description: "Understanding regional variations"
  }
];

const recentUpdates = [
  {
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Modern African business environment",
    text: "Conducting market research to understand regional needs and validate our technology solutions for maximum impact.",
    timeAgo: "2 days ago"
  },
  {
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Professional development workspace",
    text: "Finalizing Prop3's smart contract architecture. Focus on security, scalability, and compliance with African regulations.",
    timeAgo: "4 days ago"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    alt: "Technology solution deployment",
    text: "LexAI successfully processed 1,000+ legal documents. Performance metrics show significant efficiency improvements.",
    timeAgo: "1 week ago"
  }
];

export default function LiveFeed() {
  return (
    <section className="py-20 bg-site-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Life in <span className="text-site-gold">Motion</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            Current focus areas, learning progress, and recent project updates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Today's Thought */}
          <motion.div
            className="bg-site-primary/80 rounded-2xl p-8 border border-site-gold/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-site-gold mb-6">Current Insights</h3>
            <div className="bg-site-secondary/50 p-6 rounded-xl">
              <p className="text-lg text-white italic leading-relaxed">
                "Successful technology adoption in African markets requires deep understanding of local context 
                combined with global best practices. Every solution must be both innovative and practical."
              </p>
              <p className="text-site-silver text-sm mt-4">— Recent reflection on market strategy</p>
            </div>
          </motion.div>

          {/* This Week Learning */}
          <motion.div
            className="bg-site-primary/80 rounded-2xl p-8 border border-site-gold/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-site-gold mb-6">This Week I'm Learning</h3>
            <div className="space-y-4">
              {currentLearning.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center space-x-4 p-4 bg-site-secondary/50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-site-gold rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-site-silver text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Feed Simulation */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-site-gold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Recent Updates
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                className="bg-site-primary/60 rounded-xl p-6 border border-site-silver/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <img
                  src={update.image}
                  alt={update.alt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-sm mb-2">{update.text}</p>
                <p className="text-site-silver text-xs">{update.timeAgo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
