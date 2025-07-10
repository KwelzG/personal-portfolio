import { useState } from "react";
import { motion } from "framer-motion";
import { Handshake, Code, Lightbulb, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactOptions = [
  {
    icon: Handshake,
    title: "Partner with Me",
    description: "Let's build billion-dollar infrastructure together"
  },
  {
    icon: Code,
    title: "Hire Me to Build",
    description: "Web3, AI, or content for your startup"
  },
  {
    icon: Lightbulb,
    title: "Pitch Me Your Idea",
    description: "Revolutionary concepts welcome"
  }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@graciousjustinkwelle.com", label: "Email" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out! I'll get back to you soon."
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-site-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Let's <span className="text-site-gold">Build</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            Partner with me. Hire me. Pitch me your wildest ideas. Let's create something legendary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-site-secondary/50 rounded-xl p-6 border border-site-gold/20 hover:border-site-gold/40 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-site-gold/20 rounded-full flex items-center justify-center group-hover:bg-site-gold/30 transition-colors duration-300">
                    <option.icon className="text-site-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{option.title}</h4>
                    <p className="text-site-silver">{option.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-site-secondary rounded-full flex items-center justify-center hover:bg-site-gold hover:text-site-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-site-secondary/50 rounded-2xl p-8 border border-site-gold/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-site-silver text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-site-primary border-site-gold/30 text-white focus:border-site-gold"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-site-silver text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-site-primary border-site-gold/30 text-white focus:border-site-gold"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-site-silver text-sm font-medium mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                  <SelectTrigger className="w-full bg-site-primary border-site-gold/30 text-white focus:border-site-gold">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="hire">Hire for Project</SelectItem>
                    <SelectItem value="pitch">Pitch an Idea</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-site-silver text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full bg-site-primary border-site-gold/30 text-white focus:border-site-gold resize-none"
                  placeholder="Tell me about your vision..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-site-gold text-site-primary font-bold py-4 rounded-lg hover:bg-site-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/25"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
