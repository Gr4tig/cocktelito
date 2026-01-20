import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">COCKTELITO</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sublimer l'expérience des boissons à domicile grâce au design et à la technologie.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground">Explorer</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Machine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Capsules</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessoires</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Notre Histoire</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground">Support</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Livraison et Retours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground">Restez Informé</h3>
            <p className="text-muted-foreground text-sm mb-4">Inscrivez-vous pour les nouveautés et les recettes de cocktails.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Adresse email" 
                className="bg-background border border-border rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Rejoindre
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 COCKELITO. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
