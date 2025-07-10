import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Zap, Video, Crown } from "lucide-react";

const tabs = [
  { id: "now", label: "Now" },
  { id: "becoming", label: "Becoming" },
  { id: "core", label: "Core" }
];

const coreValues = [
  {
    icon: Pill,
    title: "Faith",
    description: "Guided by purpose beyond profit"
  },
  {
    icon: Zap,
    title: "Grit",
    description: "Built from the dirt, scaling to clouds"
  },
  {
    icon: Video,
    title: "Documentation",
    description: "Everything recorded, nothing wasted"
  },
  {
    icon: Crown,
    title: "Legacy",
    description: "Building systems that outlive me"
  }
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("now");

  return (
    <section id="about" className="py-20 bg-site-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Who I <span className="text-site-gold">Am</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            A layered story. Multiple dimensions. One clear direction.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-site-secondary rounded-xl p-2 inline-flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-site-gold text-site-primary"
                    : "text-site-silver hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "now" && (
              <motion.div
                key="now"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="African entrepreneur working on laptop"
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-site-gold mb-4">Right Now</h3>
                  <p className="text-lg text-white leading-relaxed">
                    I'm 19, building two companies that will reshape Africa's digital economy. 
                    <strong className="text-site-gold"> Prop3</strong> is tokenizing real-world assets starting with African real estate. 
                    <strong className="text-site-gold"> LexAI</strong> is bringing AI-powered legal support to law firms across the continent.
                  </p>
                  <p className="text-lg text-site-silver leading-relaxed">
                    When I'm not coding or strategizing, I'm learning the craft of barbering, 
                    trading markets, and documenting everything. Every skill compounds.
                  </p>
                  <div className="bg-site-secondary/50 p-4 rounded-lg border-l-4 border-site-gold">
                    <p className="text-site-gold font-semibold">Current Challenge:</p>
                    <p className="text-white">Building 10 hustles in 100 days</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "becoming" && (
              <motion.div
                key="becoming"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1 space-y-6">
                  <h3 className="text-3xl font-bold text-site-gold mb-4">What I'm Building Into</h3>
                  <p className="text-lg text-white leading-relaxed">
                    A polymath who masters multiple crafts. An entrepreneur who builds billion-dollar infrastructure. 
                    A father who creates generational wealth and wisdom.
                  </p>
                  <p className="text-lg text-site-silver leading-relaxed">
                    I'm becoming someone who bridges the gap between street hustle and digital innovation, 
                    between African roots and global impact. Every day is a step toward that vision.
                  </p>
                  <div className="space-y-3">
                    {["Tech Infrastructure Builder", "Wealth Creation Strategist", "Legacy-Focused Leader"].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-site-gold rounded-full" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                    alt="Modern tech workspace with multiple monitors"
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === "core" && (
              <motion.div
                key="core"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-8"
              >
                <h3 className="text-3xl font-bold text-site-gold mb-8">Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {coreValues.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-site-secondary/50 p-6 rounded-xl border border-site-gold/20 hover:border-site-gold/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <value.icon className="text-site-gold text-3xl mb-4 mx-auto" />
                      <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-site-silver">{value.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Rotating Quote */}
                <div className="mt-12 p-8 bg-gradient-to-r from-site-gold/10 to-site-silver/10 rounded-xl border border-site-gold/30">
                  <blockquote className="text-2xl font-light italic text-center text-white">
                    "From dirt roads to digital kingdoms"
                  </blockquote>
                  <p className="text-center text-site-gold mt-4 font-semibold">- My daily reminder</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
