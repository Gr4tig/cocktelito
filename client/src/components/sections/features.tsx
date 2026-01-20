import { motion } from "framer-motion";
import { Cpu, Droplets, LayoutTemplate, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Intelligent Brew",
    description: "Our AI-driven chip recognizes each capsule instantly, adjusting pressure and temperature for the perfect serve."
  },
  {
    icon: LayoutTemplate,
    title: "HD Touch Control",
    description: "A seamless glass interface that disappears when not in use, waking with a subtle glow at your approach."
  },
  {
    icon: Droplets,
    title: "Precision Mixing",
    description: "Micro-aeration technology ensures your cocktails have the perfect texture and your matcha is whisked to froth."
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Built from a solid block of anodized aluminum with rose gold accents. Durable, beautiful, timeless."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-50 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-8 w-8 text-zinc-900 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
