import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroVideo from "@assets/Video_en_marche_de_la_machine_1768917066095.mp4";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay */}
      </div>

      <div className="relative z-20 h-full container mx-auto flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs tracking-[0.2em] uppercase mb-6 bg-primary/10 backdrop-blur-sm">
            L'Avenir de la Mixologie
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 mb-8"
        >
          COCKTELITO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-lg mb-12 font-light leading-relaxed"
        >
          L'excellence dans chaque goutte. Le premier système intelligent multi-boissons au monde conçu pour les connaisseurs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-none"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir l'expérience
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
