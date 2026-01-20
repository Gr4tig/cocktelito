import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "cockelito-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        setItems(parsed);
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [items, isLoaded]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast({
          title: "Quantité mise à jour",
          description: `${product.name} : ${existing.quantity + 1} article(s)`,
        });
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast({
        title: "Ajouté au panier",
        description: `${product.name} ajouté à votre panier.`,
      });
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (item) {
      toast({
        title: "Article retiré",
        description: `${item.name} a été retiré du panier.`,
      });
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          if (newQuantity === 1 && delta < 0) {
            // Don't go below 1, but allow removal via removeItem
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Panier vidé",
      description: "Tous les articles ont été retirés du panier.",
    });
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
