import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import capsulesImage from "@assets/generated_images/set_of_premium_drink_capsules.png";
import machineImage from "@assets/generated_images/sleek_rose_gold_and_anthracite_drink_machine.png";
import tiroirImage from "@assets/generated_images/Tiroir.png";
import capsuleCosmopolitainImage from "@assets/generated_images/capsule_cosmopolitain.png"
import capsuleEspressoImage from "@assets/generated_images/capsule_espresso.png"

const products = [
  {
    id: "machine-preorder",
    name: "Machine COCKTELITO - Précommande",
    price: 499.0,
    image: machineImage,
    description: "Réservez votre unité. Expédition en juin 2026.",
    badge: "Limité",
  },
  {
    id: "pack-cocktail",
    name: "Pack Espresso",
    price: 29.0,
    image: capsuleEspressoImage,
    description: "12 Capsules : Espresso Martini",
    badge: "Bestseller",
  },
  {
    id: "pack-wellness",
    name: "Pack Cosmopolitain",
    price: 35.0,
    image: capsuleCosmopolitainImage,
    description: "12 Capsules : Cosmopolitain",
  },
  {
    id: "pack-all-capsule",
    name: "Collection de toutes nos capsules",
    price: 97.99,
    image: tiroirImage,
    description: "124 Capsules : Sencha, Jasmin, Earl Grey...",
  },
];

export function Shop() {
  const { addItem } = useCart();

  return (
    <section id="shop" className="py-32 bg-zinc-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase">
            La Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-zinc-900">
            Une Sélection de Goût
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-black p-8 ">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-zinc-900 font-display leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-zinc-500 mb-4 flex-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-medium text-zinc-900">
                    {product.price}€
                  </span>
                  <Button
                    size="sm"
                    className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6"
                    onClick={() => addItem(product)}
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    Ajouter
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
