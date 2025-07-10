import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-site-secondary border-t border-site-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Signature Quote */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-white">
              "Innovation rooted in purpose. Impact designed for scale."
            </blockquote>
            <p className="text-site-gold font-tech font-bold">Building Africa's technological future.</p>
            <p className="text-site-silver">Creating solutions that transform markets and communities.</p>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-site-silver">© 2024 Gracious Justin Kwelle</p>
            <div className="flex space-x-6">
              <a href="#" className="text-site-silver hover:text-site-gold transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-site-silver hover:text-site-gold transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-site-silver hover:text-site-gold transition-colors duration-300">
                Blog
              </a>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="pt-8 border-t border-site-gold/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-site-silver text-sm max-w-2xl mx-auto">
              Transforming challenges into opportunities through technology and innovation. 
              Building sustainable solutions for Africa's digital economy.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
