import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">COCKELITO</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Sublimer l'expérience des boissons à domicile grâce au design et à la technologie.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Explorer</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-primary transition-colors">Machine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Capsules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessoires</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Notre Histoire</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-primary transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Livraison et Retours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider">Restez Informé</h3>
            <p className="text-zinc-500 text-sm mb-4">Inscrivez-vous pour les nouveautés et les recettes de cocktails.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Adresse email" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">© 2026 COCKELITO. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
