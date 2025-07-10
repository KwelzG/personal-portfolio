import { motion } from "framer-motion";
import { Trophy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-site-primary via-site-secondary to-site-primary" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0">
        <motion.div
          className="w-2 h-2 bg-site-gold rounded-full absolute top-1/4 left-1/4"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1 h-1 bg-site-silver rounded-full absolute top-3/4 right-1/3"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="w-3 h-3 bg-site-gold/50 rounded-full absolute bottom-1/4 left-1/2"
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Hustler Level Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-site-secondary/80 px-4 py-2 rounded-full border border-site-gold/30"
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(51, 100%, 50%)",
                  "0 0 30px hsl(51, 100%, 50%), 0 0 40px hsl(51, 100%, 50%)",
                  "0 0 20px hsl(51, 100%, 50%)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Trophy className="text-site-gold" size={16} />
              <span className="font-tech text-sm">Active Projects: 2 Companies</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Gracious</span>
              <br />
              <span className="text-site-gold">Justin</span>
              <br />
              <span className="text-white">Kwelle</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-light text-site-silver"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Entrepreneur & Founder
              <br />
              <span className="text-site-gold">Building Africa's Digital Future</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                onClick={scrollToJourney}
                className="px-8 py-4 bg-site-gold text-site-primary font-bold rounded-lg hover:bg-site-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/25"
              >
                Explore My Journey
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="px-8 py-4 border-2 border-site-gold text-site-gold font-bold rounded-lg hover:bg-site-gold hover:text-site-primary transition-all duration-300"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Professional portrait */}
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-site-gold to-site-silver rounded-full opacity-20"
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(51, 100%, 50%)",
                    "0 0 30px hsl(51, 100%, 50%), 0 0 40px hsl(51, 100%, 50%)",
                    "0 0 20px hsl(51, 100%, 50%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Gracious Justin Kwelle - Professional portrait"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-site-gold shadow-2xl"
                animate={{ y: [-20, 0, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToJourney}
        >
          <ChevronDown className="text-site-gold text-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
