import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, Zap, Video, Crown } from "lucide-react";
import look from "../assets/look.jpg";

const tabs = [
  { id: "now", label: "Now" },
  { id: "becoming", label: "Becoming" },
  { id: "core", label: "Core" },
];

const coreValues = [
  {
    icon: Pill,
    title: "Faith",
    description: "God leads, I follow",
  },
  {
    icon: Zap,
    title: "Grit",
    description: "In the face of adversity, I persevere",
  },
  {
    icon: Video,
    title: "Documentation",
    description: "Everything recorded, nothing wasted",
  },
  {
    icon: Crown,
    title: "Legacy",
    description: "Building systems that outlive me",
  },
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
                    src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
                    alt="Young african male programmer writing program code sitting at the workplace with three monitors in the office."
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-site-gold mb-4">
                    Right Now
                  </h3>
                  <p className="text-lg text-white leading-relaxed">
                    At present, I'm building two technology companies focused on
                    Africa's digital transformation.
                    <strong className="text-site-gold"> Prope3</strong>{" "}
                    tokenizes real-world assets, starting with African real
                    estate markets.
                    <strong className="text-site-gold"> LexAI</strong> provides
                    AI-powered legal research and document processing for law
                    firms.
                  </p>
                  <p className="text-lg text-site-silver leading-relaxed">
                    My approach combines technical innovation with practical
                    skills, constantly learning and documenting the
                    entrepreneurial journey while building sustainable
                    solutions.
                  </p>
                  <div className="bg-site-secondary/50 p-4 rounded-lg border-l-4 border-site-gold">
                    <p className="text-site-gold font-semibold">
                      Current Focus:
                    </p>
                    <p className="text-white">
                      Scaling AI and blockchain solutions across African markets
                    </p>
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
                  <h3 className="text-3xl font-bold text-site-gold mb-4">
                    What I'm Building Into
                  </h3>
                  <p className="text-lg text-white leading-relaxed">
                    A technology leader who bridges innovation and practical
                    application. An entrepreneur building scalable
                    infrastructure for emerging markets. A strategist focused on
                    creating lasting economic impact.
                  </p>
                  <p className="text-lg text-site-silver leading-relaxed">
                    I'm developing expertise across multiple domains while
                    maintaining focus on Africa's technological advancement and
                    sustainable economic growth.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Tech Infrastructure Builder",
                      "Wealth Creation Strategist",
                      "Legacy-Focused Leader",
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-site-gold rounded-full" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={look}
                    alt="Business man and back thinking at window in office with city view for legal case"
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
                <h3 className="text-3xl font-bold text-site-gold mb-8">
                  Core Values
                </h3>
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
                      <h4 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-site-silver">{value.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Rotating Quote */}
                <div className="mt-12 p-8 bg-gradient-to-r from-site-gold/10 to-site-silver/10 rounded-xl border border-site-gold/30">
                  <blockquote className="text-2xl font-light italic text-center text-white">
                    "Zero is the beginning of all things possible."
                  </blockquote>
                  <p className="text-center text-site-gold mt-4 font-semibold">
                    - My daily reminder
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
