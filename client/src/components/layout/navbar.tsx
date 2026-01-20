import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  const { items, total, removeItem, updateQuantity } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 h-16 sm:h-20 transition-all duration-300">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-display font-bold tracking-widest text-primary">
          COCKELITO
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-white/80">
            <a href="#features" className="hover:text-primary transition-colors">Experience</a>
            <a href="#machine" className="hover:text-primary transition-colors">Machine</a>
            <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-white hover:text-primary hover:bg-white/5" data-testid="button-cart">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md border-l border-white/10 bg-[#1a1a24] text-white">
              <SheetHeader>
                <SheetTitle className="text-white font-display tracking-wider">Your Selection</SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 flex-1 h-[calc(100vh-12rem)]">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-white/40 space-y-4">
                    <ShoppingBag className="h-12 w-12 opacity-20" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <ScrollArea className="h-full pr-4">
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="h-20 w-20 bg-white/5 rounded-md overflow-hidden flex-shrink-0">
                             <img src={item.image} alt={item.name} className="h-full w-full object-cover opacity-80" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <h4 className="font-medium text-white/90">{item.name}</h4>
                            <p className="text-primary text-sm">${item.price}</p>
                            
                            <div className="flex items-center gap-2 mt-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6 border-white/10 hover:bg-white/10 text-white"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm w-4 text-center">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-6 w-6 border-white/10 hover:bg-white/10 text-white"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 ml-auto text-white/40 hover:text-destructive hover:bg-transparent"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </div>

              {items.length > 0 && (
                <div className="mt-6 space-y-4">
                  <Separator className="bg-white/10" />
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-lg">
                    Checkout
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
