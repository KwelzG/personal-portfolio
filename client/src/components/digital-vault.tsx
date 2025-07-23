import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const vaultItems = [
  {
    title: "Trading Journal Template",
    description: "My personal trading journal setup in Notion.",
    status: "LIVE",
    statusColor: "green",
    tags: ["Trading", "Notion"],
    action: "Download",
  },
  {
    title: "100-Day Hustle Tracker",
    description: "Track multiple hustles with progress analytics.",
    status: "BETA",
    statusColor: "yellow",
    tags: ["Productivity", "Web App"],
    action: "Early Access",
  },
  {
    title: "AI Prompt Library",
    description: "Curated prompts for business and creativity.",
    status: "COMING SOON",
    statusColor: "blue",
    tags: ["AI", "Prompts"],
    action: "Notify Me",
  },
];

export default function DigitalVault() {
  const getStatusBgColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500/20 text-green-400";
      case "yellow":
        return "bg-yellow-500/20 text-yellow-400";
      case "blue":
        return "bg-blue-500/20 text-blue-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section className="py-20 bg-site-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            The <span className="text-site-gold">Vault</span>
          </h2>
          <p className="text-xl text-site-silver max-w-3xl mx-auto">
            Digital experiments, tools, and resources. Early access to my latest
            drops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaultItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-site-secondary/50 rounded-xl p-6 border border-site-gold/20 hover:border-site-gold/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <span
                  className={`px-2 py-1 rounded text-xs ${getStatusBgColor(
                    item.statusColor
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-site-silver text-sm mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-site-gold/20 text-site-gold px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.title === "Trading Journal Template" ? (
                <a
                  href="/public/The holy grail (gracious trading journal template).xlsx"
                  download
                  className="text-site-gold hover:text-site-gold/80 font-semibold p-0 h-auto hover:bg-transparent inline-block"
                  style={{ fontSize: "1rem", padding: 0 }}
                >
                  {item.action} →
                </a>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-site-gold hover:text-site-gold/80 font-semibold p-0 h-auto hover:bg-transparent"
                >
                  {item.action} →
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
