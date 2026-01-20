import { motion } from "framer-motion";
import { Cpu, Droplets, LayoutTemplate, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Système de capsules intelligent",
    description: "Insérez seulement votre capsule : la puce IA ajuste température et pression sans aucun réglage."
  },
  {
    icon: LayoutTemplate,
    title: "Écran tactile HD",
    description: "Une interface en verre transparente qui vous permet de choisir facilement vos boissons préférées."
  },
  {
    icon: Droplets,
    title: "Mélange de précision",
    description: "Qu'il s'agisse de l'onctuosité d'un matcha ou de la texture d'un cocktail frappé, notre système de micro-aération garantit l'excellence."
  },
  {
    icon: Sparkles,
    title: "Design Premium",
    description: "Construit à partir d'un bloc massif d'aluminium anodisé avec des accents en or rose. Durable, beau, intemporel."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background text-foreground">
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
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
