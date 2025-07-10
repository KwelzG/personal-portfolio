import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Prop3",
    subtitle: "Real Estate Tokenization Platform",
    description: "A blockchain-based platform enabling fractional ownership of African real estate through asset tokenization, increasing accessibility and liquidity in property markets.",
    status: "DEVELOPMENT",
    statusColor: "yellow",
    tags: ["Blockchain", "Real Estate", "DeFi", "Africa"]
  },
  {
    title: "LexAI Solutions",
    subtitle: "Legal AI Research Platform",
    description: "AI-powered legal research and document analysis platform designed specifically for African legal systems, improving efficiency and access to legal services.",
    status: "ACTIVE",
    statusColor: "green",
    tags: ["AI/ML", "Legal Tech", "SaaS", "Enterprise"]
  }
];

const otherHustles = [
  {
    title: "Investment Strategy",
    description: "Developing systematic approaches to market analysis and portfolio management across traditional and cryptocurrency markets.",
    status: "ACTIVE",
    statusColor: "green"
  },
  {
    title: "Skills Development",
    description: "Continuous learning across multiple disciplines to build diverse expertise and practical knowledge.",
    status: "ONGOING",
    statusColor: "blue"
  },
  {
    title: "Content Creation",
    description: "Documenting entrepreneurial insights and technical learnings to share knowledge with the community.",
    status: "ACTIVE",
    statusColor: "green"
  }
];

export default function ProjectsSection() {
  const getStatusBgColor = (color: string) => {
    switch (color) {
      case "green": return "bg-green-500/20 border-green-500/30 text-green-400";
      case "yellow": return "bg-yellow-500/20 border-yellow-500/30 text-yellow-400";
      case "blue": return "bg-blue-500/20 border-blue-500/30 text-blue-400";
      default: return "bg-gray-500/20 border-gray-500/30 text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-site-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            My <span className="text-site-gold">Projects</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            Technology solutions focused on transforming African markets through AI and blockchain innovation.
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-site-primary/80 rounded-2xl p-8 border border-site-gold/20 hover:border-site-gold/50 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-site-gold mb-2">{project.title}</h3>
                  <p className="text-site-silver text-lg">{project.subtitle}</p>
                </div>
                <div className={`px-3 py-1 rounded-full border ${getStatusBgColor(project.statusColor)}`}>
                  <span className="text-sm font-tech">{project.status}</span>
                </div>
              </div>

              <p className="text-white mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-site-gold/20 text-site-gold px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="w-full bg-site-gold text-site-primary font-bold py-3 rounded-lg group-hover:bg-site-gold/90 transition-all duration-300">
                View Project Details
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Other Hustles */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherHustles.map((hustle, index) => (
            <motion.div
              key={hustle.title}
              className="bg-site-primary/60 rounded-xl p-6 border border-site-silver/20 hover:border-site-silver/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">{hustle.title}</h4>
                <div className={`px-2 py-1 rounded border ${getStatusBgColor(hustle.statusColor)}`}>
                  <span className="text-xs font-tech">{hustle.status}</span>
                </div>
              </div>
              <p className="text-site-silver mb-4">{hustle.description}</p>
              <button className="text-site-gold hover:text-site-gold/80 font-semibold text-sm transition-colors duration-300">
                Journal Logs →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
