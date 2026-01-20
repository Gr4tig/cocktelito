import { motion } from "framer-motion";
import { Cpu, Droplets, LayoutTemplate, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Système de capsules intelligent",
    description: "Notre puce pilotée par IA reconnaît chaque capsule instantanément, ajustant la pression et la température pour une infusion parfaite."
  },
  {
    icon: LayoutTemplate,
    title: "Écran tactile HD",
    description: "Une interface en verre transparente qui disparaît lorsqu'elle n'est pas utilisée, s'éveillant d'une lueur subtile à votre approche."
  },
  {
    icon: Droplets,
    title: "Mélange de précision",
    description: "La technologie de micro-aération garantit que vos cocktails ont la texture parfaite et que votre matcha est fouetté à point."
  },
  {
    icon: Sparkles,
    title: "Design Premium",
    description: "Construit à partir d'un bloc massif d'aluminium anodisé avec des accents en or rose. Durable, beau, intemporel."
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
