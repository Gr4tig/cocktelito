import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Navbar() {
  const { items, total, removeItem, updateQuantity, clearCart, itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 sm:h-20 transition-all duration-300">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-display font-bold tracking-widest text-primary">
          COCKTELITO
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-foreground/80">
            <a href="#features" className="hover:text-primary transition-colors">Expérience</a>
            <a href="#machine" className="hover:text-primary transition-colors">Machine</a>
            <a href="#shop" className="hover:text-primary transition-colors">Boutique</a>
          </div>

          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-foreground hover:text-primary hover:bg-accent" data-testid="button-cart">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-in fade-in zoom-in">
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md border-l border-border bg-background text-foreground flex flex-col">
              <SheetHeader className="pb-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <SheetTitle className="font-display tracking-wider text-xl">Votre Panier</SheetTitle>
                  {items.length > 0 && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-muted-foreground hover:text-destructive"
                        >
                          Vider
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Vider le panier ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Êtes-vous sûr de vouloir retirer tous les articles de votre panier ?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction onClick={clearCart} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                            Vider le panier
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
                {items.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {itemCount} {itemCount === 1 ? "article" : "articles"}
                  </p>
                )}
              </SheetHeader>
              
              <div className="flex-1 overflow-hidden mt-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4 py-12">
                    <ShoppingCart className="h-16 w-16 opacity-20" />
                    <div className="text-center space-y-2">
                      <p className="text-lg font-medium">Votre panier est vide</p>
                      <p className="text-sm">Ajoutez des produits pour commencer</p>
                    </div>
                    <SheetClose asChild>
                      <Link href="/#shop">
                        <Button variant="outline" className="mt-4">
                          Parcourir la boutique
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                ) : (
                  <ScrollArea className="h-full pr-4">
                    <AnimatePresence>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
                          >
                            <Link href={`/product/${item.id}`} className="flex-shrink-0">
                              <div className="h-20 w-20 bg-muted rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                              </div>
                            </Link>
                            <div className="flex-1 min-w-0">
                              <Link href={`/product/${item.id}`}>
                                <h4 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2 mb-1">
                                  {item.name}
                                </h4>
                              </Link>
                              <p className="text-sm text-muted-foreground mb-2">
                                {item.price.toFixed(2)}€ × {item.quantity} = <span className="font-semibold text-foreground">{(item.price * item.quantity).toFixed(2)}€</span>
                              </p>
                              
                              <div className="flex items-center gap-2">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-7 w-7 border-border hover:bg-accent"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium w-8 text-center text-foreground">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-7 w-7 border-border hover:bg-accent"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                  onClick={() => removeItem(item.id)}
                                  title="Retirer du panier"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </AnimatePresence>
                  </ScrollArea>
                )}
              </div>

              {items.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sous-total</span>
                    <span className="text-sm font-medium text-foreground">{total.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">{total.toFixed(2)}€</span>
                  </div>
                  <SheetClose asChild>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-lg"
                      onClick={() => {
                        toast({
                          title: "Commande en cours",
                          description: "Fonctionnalité de commande à venir prochainement.",
                        });
                      }}
                    >
                      Passer la commande
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#shop">
                      <Button variant="outline" className="w-full">
                        Continuer les achats
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
