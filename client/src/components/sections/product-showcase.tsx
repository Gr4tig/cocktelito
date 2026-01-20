import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import machineImage from "@assets/generated_images/sleek_rose_gold_and_anthracite_drink_machine.png";
import { Plus } from "lucide-react";

export function ProductShowcase() {
  const points = [
    { x: "20%", y: "30%", label: "Système de capsules intelligent", desc: "Reconnaissance RFID pour des paramètres d'infusion parfaits" },
    { x: "75%", y: "40%", label: "Interface tactile HD", desc: "Contrôle intuitif de l'intensité et de la température" },
    { x: "50%", y: "85%", label: "Bec de précision", desc: "Flux aéré pour une libération optimale des arômes" },
    { x: "30%", y: "60%", label: "Finition Or Rose", desc: "Alliage d'aluminium de qualité aéronautique" },
  ];

  return (
    <section id="machine" className="py-24 md:py-32 bg-[#121217] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">L'Ingénierie de la Perfection</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Chaque courbe est intentionnelle. Chaque matériau est premium. COCKELITO n'est pas seulement une machine ; c'est une pièce maîtresse.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto aspect-[4/5] md:aspect-[16/9] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-full w-full"
          >
            {/* Image Container with Glow */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full transform scale-75" />
            <img 
              src={machineImage} 
              alt="COCKELITO Machine" 
              className="relative w-full h-full object-contain drop-shadow-2xl z-10"
            />

            {/* Interaction Points */}
            <TooltipProvider delayDuration={0}>
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="absolute z-20" 
                  style={{ top: point.y, left: point.x }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative group">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping" />
                        <div className="relative h-8 w-8 bg-black/50 backdrop-blur-md border border-primary/50 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                          <Plus className="h-4 w-4" />
                        </div>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-black/90 border-white/10 text-white p-4 max-w-xs">
                      <p className="font-bold text-primary mb-1">{point.label}</p>
                      <p className="text-xs text-white/70">{point.desc}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </TooltipProvider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
